class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {weather: this.marsData(this.getMarsWeatherSucess)};
    this.getMarsWeatherData = this.getMarsWeatherData.bind(this);
    this.getMarsWeatherSucess = this.getMarsWeatherSucess.bind(this);
    this.marsData = this.marsData.bind(this)
  }

  getMarsWeatherData() {
    marsData(this.getMarsWeatherSucess);
  }

  getMarsWeatherSucess (data, context) {
    console.log(JSONprettify(data));
    console.log(context);
    context.setState({weather: data});
  }

  marsData (callback) {
    var context = this;
    $.ajax({
      url: 'http://marsweather.ingenology.com/v1/archive/?page=1&format=jsonp',
      type: 'GET',
      dataType: 'jsonp',
      crossDomain:true,
      success: function(data) {
        callback(data, context);
      },
      error: function(err) {
        console.log('ERROR ', err);
      }
    });
  }

  render() {
    return (
      <div>
        <Header getMarsWeatherData={this.getMarsWeatherData}/>
        <div>
          <Content weather={this.state.weather}/> 
        </div>
        <Footer />
      </div>
    );
  }
}

window.App = App;