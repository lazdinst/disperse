var Navbar = (props) => {

  return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" onClick={(e) => {
              props.getMarsWeatherData(e);
            }}>
              <img alt="Mars Weather" width="25px" src="http://i.imgur.com/MOLJU38.png"/>
            </a>
          </div>
          <div className="pull-right">Mars Weather</div>
        </div>
      </nav>
  );
}

window.Navbar = Navbar;