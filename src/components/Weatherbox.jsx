var Weatherbox = (props) => {
  // JSONprettify(props.weather.hasOWnproperty());
  var currentSol, sols, sol, year, day, month, pressure, sunset, sunrise;
  var minTemp, maxTemp, avgTemp;

  if(props.weather.hasOwnProperty('results')) {
    JSONprettify(props.weather.results[0]);

    //Format data, refactor later
    

    sols = props.weather.results;
    currentSol = sols[0];
    sol = currentSol.sol;

    //Earth data
    var date = currentSol.terrestrial_date;
    year = date.slice(0,4);
    month = date.slice(5,7);
    day = date.slice(8,10);

    //Temperature Data
    minTemp = currentSol.min_temp;
    maxTemp = currentSol.max_temp;
    avgTemp = (maxTemp + minTemp) / 2;


    pressure = currentSol.pressure;

    sunrise = currentSol.sunrise.slice(11,16);
    sunset = currentSol.sunset.slice(11,16);


  }
  return(
    <div>
      <div className='weather-card'>
        <div className='weather-card--landmark'>
          <div className='landmark'>
            <img src='http://i.imgur.com/MpfTh3L.png'/>
          </div>
          <div className='clouds'></div>
        </div>
        <div className='weather-card--cityname'>
          <h1>
            Olympus Mons
          </h1>
          <div className='weather-card--details'>
            <span className='details--day'>Sol</span>
            :
            <span className='details--date'>{sol}</span>
          </div>
          <div className='weather-card--details'>
            <span className='details--day'>{month}</span>
            /
            <span className='details--date'>{day}</span>
            /
            <span className='details--time'>{year}</span>
          </div>
          <div className='weather-card--temperature'>
            <ul>
              <li className='outer-temp'></li>
              <li className='mid-temp left-50'>{minTemp}</li>
              <li className='current-temp'>{avgTemp}</li>
              <li className='mid-temp right-50'>{maxTemp}</li>
              <li className='outer-temp'></li>
            </ul>
          </div>
          <div className='weather-card-table'>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td>Pressure:</td>
                  <td>{pressure} <span>Pa</span></td>
                </tr>
                <tr>
                  <td>Sunrise:</td>
                  <td>{sunrise}</td>
                </tr>
                <tr>
                  <td>Sunset:</td>
                  <td>{sunset}</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Weatherbox = Weatherbox;


          // <div className='weather-card--temperature'>
          //   <ul>
          //     <li className='outer-temp'>23</li>
          //     <li className='mid-temp left-50'>26</li>
          //     <li className='current-temp'>29</li>
          //     <li className='mid-temp right-50'>28</li>
          //     <li className='outer-temp'>30</li>
          //   </ul>
          // </div>