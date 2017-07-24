var Weatherbox = (props) => {
  // JSONprettify(props.weather.hasOWnproperty());
  var currentSol, sols, sol, year, day, month;

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
        </div>
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
            <li className='outer-temp'>22</li>
            <li className='mid-temp left-50'>26</li>
            <li className='current-temp'>29</li>
            <li className='mid-temp right-50'>28</li>
            <li className='outer-temp'>30</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

window.Weatherbox = Weatherbox;