class App extends React.Component {
  constructor (props) {
    super(props);
    this.getMarsWeatherData = this.getMarsWeatherData.bind(this);
    this.getMarsWeatherSucess = this.getMarsWeatherSucess.bind(this);
    // this.marsData = this.marsData.bind(this);
    this.state = {weather: {}};
  }
  
  getMarsWeatherData() {
    var context = this;
    marsData(this.getMarsWeatherSucess, context);
  }

  getMarsWeatherSucess (data, context) {
    context.setState({weather: data});
  }

  componentDidMount() {
    this.getMarsWeatherData();
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