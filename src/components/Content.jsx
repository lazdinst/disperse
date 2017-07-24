var Content = (props) => {
  
  return(
    <div className="container-fluid">
      <Weatherbox weather={props.weather}/>
    </div>
  );
}

window.Content = Content;