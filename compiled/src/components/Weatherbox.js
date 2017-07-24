'use strict';

var Weatherbox = function Weatherbox(props) {
  // JSONprettify(props.weather.hasOWnproperty());
  var currentSol, sols, sol, year, day, month, pressure, sunset, sunrise;
  var minTemp, maxTemp, avgTemp, opacity;

  if (props.weather.hasOwnProperty('results')) {
    JSONprettify(props.weather.results[0]);

    //Format data, refactor later


    sols = props.weather.results;
    currentSol = sols[0];
    sol = currentSol.sol;

    //Earth data
    var date = currentSol.terrestrial_date;
    year = date.slice(0, 4);
    month = date.slice(5, 7);
    day = date.slice(8, 10);

    //Temperature Data
    minTemp = currentSol.min_temp;
    maxTemp = currentSol.max_temp;
    avgTemp = (maxTemp + minTemp) / 2;

    opacity = currentSol.atmo_opacity;

    pressure = currentSol.pressure;

    sunrise = currentSol.sunrise.slice(11, 16);
    sunset = currentSol.sunset.slice(11, 16);
  }
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'weather-card' },
      React.createElement(
        'div',
        { className: 'weather-card--landmark' },
        React.createElement(
          'div',
          { className: 'landmark' },
          React.createElement('img', { src: 'http://i.imgur.com/MpfTh3L.png' })
        ),
        React.createElement('div', { className: 'clouds' })
      ),
      React.createElement(
        'div',
        { className: 'weather-card--cityname' },
        React.createElement(
          'h1',
          null,
          'Olympus Mons'
        ),
        React.createElement(
          'div',
          { className: 'weather-card--details' },
          React.createElement(
            'span',
            { className: 'details--day' },
            'Sol'
          ),
          ':',
          React.createElement(
            'span',
            { className: 'details--date' },
            sol
          )
        ),
        React.createElement(
          'div',
          { className: 'weather-card--details' },
          React.createElement(
            'span',
            { className: 'details--day' },
            month
          ),
          '/',
          React.createElement(
            'span',
            { className: 'details--date' },
            day
          ),
          '/',
          React.createElement(
            'span',
            { className: 'details--time' },
            year
          )
        ),
        React.createElement(
          'div',
          { className: 'weather-card--temperature' },
          React.createElement(
            'ul',
            null,
            React.createElement('li', { className: 'outer-temp' }),
            React.createElement(
              'li',
              { className: 'mid-temp left-50' },
              minTemp
            ),
            React.createElement(
              'li',
              { className: 'current-temp' },
              avgTemp
            ),
            React.createElement(
              'li',
              { className: 'mid-temp right-50' },
              maxTemp
            ),
            React.createElement('li', { className: 'outer-temp' })
          )
        ),
        React.createElement(
          'div',
          { className: 'weather-card-table' },
          React.createElement(
            'table',
            { className: 'table table-hover' },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  'Pressure:'
                ),
                React.createElement(
                  'td',
                  null,
                  pressure,
                  ' ',
                  React.createElement(
                    'span',
                    null,
                    'Pa'
                  )
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  'Sunrise:'
                ),
                React.createElement(
                  'td',
                  null,
                  sunrise
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  'Sunset:'
                ),
                React.createElement(
                  'td',
                  null,
                  sunset
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  'Opacity: '
                ),
                React.createElement(
                  'td',
                  null,
                  opacity
                )
              )
            )
          )
        )
      )
    )
  );
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dlYXRoZXJib3guanN4Il0sIm5hbWVzIjpbIldlYXRoZXJib3giLCJwcm9wcyIsImN1cnJlbnRTb2wiLCJzb2xzIiwic29sIiwieWVhciIsImRheSIsIm1vbnRoIiwicHJlc3N1cmUiLCJzdW5zZXQiLCJzdW5yaXNlIiwibWluVGVtcCIsIm1heFRlbXAiLCJhdmdUZW1wIiwib3BhY2l0eSIsIndlYXRoZXIiLCJoYXNPd25Qcm9wZXJ0eSIsIkpTT05wcmV0dGlmeSIsInJlc3VsdHMiLCJkYXRlIiwidGVycmVzdHJpYWxfZGF0ZSIsInNsaWNlIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImF0bW9fb3BhY2l0eSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCO0FBQ0EsTUFBSUMsVUFBSixFQUFnQkMsSUFBaEIsRUFBc0JDLEdBQXRCLEVBQTJCQyxJQUEzQixFQUFpQ0MsR0FBakMsRUFBc0NDLEtBQXRDLEVBQTZDQyxRQUE3QyxFQUF1REMsTUFBdkQsRUFBK0RDLE9BQS9EO0FBQ0EsTUFBSUMsT0FBSixFQUFhQyxPQUFiLEVBQXNCQyxPQUF0QixFQUErQkMsT0FBL0I7O0FBRUEsTUFBR2IsTUFBTWMsT0FBTixDQUFjQyxjQUFkLENBQTZCLFNBQTdCLENBQUgsRUFBNEM7QUFDMUNDLGlCQUFhaEIsTUFBTWMsT0FBTixDQUFjRyxPQUFkLENBQXNCLENBQXRCLENBQWI7O0FBRUE7OztBQUdBZixXQUFPRixNQUFNYyxPQUFOLENBQWNHLE9BQXJCO0FBQ0FoQixpQkFBYUMsS0FBSyxDQUFMLENBQWI7QUFDQUMsVUFBTUYsV0FBV0UsR0FBakI7O0FBRUE7QUFDQSxRQUFJZSxPQUFPakIsV0FBV2tCLGdCQUF0QjtBQUNBZixXQUFPYyxLQUFLRSxLQUFMLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBUDtBQUNBZCxZQUFRWSxLQUFLRSxLQUFMLENB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eCA9IChwcm9wcykgPT4ge1xuICAvLyBKU09OcHJldHRpZnkocHJvcHMud2VhdGhlci5oYXNPV25wcm9wZXJ0eSgpKTtcbiAgdmFyIGN1cnJlbnRTb2wsIHNvbHMsIHNvbCwgeWVhciwgZGF5LCBtb250aCwgcHJlc3N1cmUsIHN1bnNldCwgc3VucmlzZTtcbiAgdmFyIG1pblRlbXAsIG1heFRlbXAsIGF2Z1RlbXAsIG9wYWNpdHk7XG5cbiAgaWYocHJvcHMud2VhdGhlci5oYXNPd25Qcm9wZXJ0eSgncmVzdWx0cycpKSB7XG4gICAgSlNPTnByZXR0aWZ5KHByb3BzLndlYXRoZXIucmVzdWx0c1swXSk7XG5cbiAgICAvL0Zvcm1hdCBkYXRhLCByZWZhY3RvciBsYXRlclxuICAgIFxuXG4gICAgc29scyA9IHByb3BzLndlYXRoZXIucmVzdWx0cztcbiAgICBjdXJyZW50U29sID0gc29sc1swXTtcbiAgICBzb2wgPSBjdXJyZW50U29sLnNvbDtcblxuICAgIC8vRWFydGggZGF0YVxuICAgIHZhciBkYXRlID0gY3VycmVudFNvbC50ZXJyZXN0cmlhbF9kYXRlO1xuICAgIHllYXIgPSBkYXRlLnNsaWNlKDAsNCk7XG4gICAgbW9udGggPSBkYXRlLnNsaWNlKDUsNyk7XG4gICAgZGF5ID0gZGF0ZS5zbGljZSg4LDEwKTtcblxuICAgIC8vVGVtcGVyYXR1cmUgRGF0YVxuICAgIG1pblRlbXAgPSBjdXJyZW50U29sLm1pbl90ZW1wO1xuICAgIG1heFRlbXAgPSBjdXJyZW50U29sLm1heF90ZW1wO1xuICAgIGF2Z1RlbXAgPSAobWF4VGVtcCArIG1pblRlbXApIC8gMjtcblxuICAgIG9wYWNpdHkgPSBjdXJyZW50U29sLmF0bW9fb3BhY2l0eTtcblxuICAgIHByZXNzdXJlID0gY3VycmVudFNvbC5wcmVzc3VyZTtcblxuICAgIHN1bnJpc2UgPSBjdXJyZW50U29sLnN1bnJpc2Uuc2xpY2UoMTEsMTYpO1xuICAgIHN1bnNldCA9IGN1cnJlbnRTb2wuc3Vuc2V0LnNsaWNlKDExLDE2KTtcblxuXG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tbGFuZG1hcmsnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kbWFyayc+XG4gICAgICAgICAgICA8aW1nIHNyYz0naHR0cDovL2kuaW1ndXIuY29tL01wZlRoM0wucG5nJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3Vkcyc+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLS1jaXR5bmFtZSc+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgT2x5bXB1cyBNb25zXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLS1kZXRhaWxzJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscy0tZGF5Jz5Tb2w8L3NwYW4+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRhdGUnPntzb2x9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLWRldGFpbHMnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS1kYXknPnttb250aH08L3NwYW4+XG4gICAgICAgICAgICAvXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRhdGUnPntkYXl9PC9zcGFuPlxuICAgICAgICAgICAgL1xuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS10aW1lJz57eWVhcn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tdGVtcGVyYXR1cmUnPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtaWQtdGVtcCBsZWZ0LTUwJz57bWluVGVtcH08L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjdXJyZW50LXRlbXAnPnthdmdUZW1wfTwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21pZC10ZW1wIHJpZ2h0LTUwJz57bWF4VGVtcH08L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLXRhYmxlJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlByZXNzdXJlOjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3ByZXNzdXJlfSA8c3Bhbj5QYTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlN1bnJpc2U6PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3VucmlzZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlN1bnNldDo8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzdW5zZXR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5PcGFjaXR5OiA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntvcGFjaXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbndpbmRvdy5XZWF0aGVyYm94ID0gV2VhdGhlcmJveDtcblxuXG4gICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tdGVtcGVyYXR1cmUnPlxuICAgICAgICAgIC8vICAgPHVsPlxuICAgICAgICAgIC8vICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz4yMzwvbGk+XG4gICAgICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9J21pZC10ZW1wIGxlZnQtNTAnPjI2PC9saT5cbiAgICAgICAgICAvLyAgICAgPGxpIGNsYXNzTmFtZT0nY3VycmVudC10ZW1wJz4yOTwvbGk+XG4gICAgICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9J21pZC10ZW1wIHJpZ2h0LTUwJz4yODwvbGk+XG4gICAgICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9J291dGVyLXRlbXAnPjMwPC9saT5cbiAgICAgICAgICAvLyAgIDwvdWw+XG4gICAgICAgICAgLy8gPC9kaXY+Il19