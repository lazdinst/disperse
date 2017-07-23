var Header = (props) => {
  return(
    <div>
      <Navbar getMarsWeatherData={props.getMarsWeatherData}/>
    </div>
  );
}

window.Header = Header;