var Weatherbox = (props) => {

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
          <span className='details--day'>Monday</span>
          |
          <span className='details--date'>Sep 12</span>
          |
          <span className='details--time'>12:34</span>
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