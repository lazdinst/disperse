'use strict';

var Weatherbox = function Weatherbox(props) {
  // JSONprettify(props.weather.hasOWnproperty());
  var currentSol, sols, sol, year, day, month, pressure, sunset, sunrise;
  var minTemp, maxTemp, avgTemp;

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
                  'July'
                ),
                React.createElement(
                  'td',
                  null,
                  'Dooley'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dlYXRoZXJib3guanN4Il0sIm5hbWVzIjpbIldlYXRoZXJib3giLCJwcm9wcyIsImN1cnJlbnRTb2wiLCJzb2xzIiwic29sIiwieWVhciIsImRheSIsIm1vbnRoIiwicHJlc3N1cmUiLCJzdW5zZXQiLCJzdW5yaXNlIiwibWluVGVtcCIsIm1heFRlbXAiLCJhdmdUZW1wIiwid2VhdGhlciIsImhhc093blByb3BlcnR5IiwiSlNPTnByZXR0aWZ5IiwicmVzdWx0cyIsImRhdGUiLCJ0ZXJyZXN0cmlhbF9kYXRlIiwic2xpY2UiLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDMUI7QUFDQSxNQUFJQyxVQUFKLEVBQWdCQyxJQUFoQixFQUFzQkMsR0FBdEIsRUFBMkJDLElBQTNCLEVBQWlDQyxHQUFqQyxFQUFzQ0MsS0FBdEMsRUFBNkNDLFFBQTdDLEVBQXVEQyxNQUF2RCxFQUErREMsT0FBL0Q7QUFDQSxNQUFJQyxPQUFKLEVBQWFDLE9BQWIsRUFBc0JDLE9BQXRCOztBQUVBLE1BQUdaLE1BQU1hLE9BQU4sQ0FBY0MsY0FBZCxDQUE2QixTQUE3QixDQUFILEVBQTRDO0FBQzFDQyxpQkFBYWYsTUFBTWEsT0FBTixDQUFjRyxPQUFkLENBQXNCLENBQXRCLENBQWI7O0FBRUE7OztBQUdBZCxXQUFPRixNQUFNYSxPQUFOLENBQWNHLE9BQXJCO0FBQ0FmLGlCQUFhQyxLQUFLLENBQUwsQ0FBYjtBQUNBQyxVQUFNRixXQUFXRSxHQUFqQjs7QUFFQTtBQUNBLFFBQUljLE9BQU9oQixXQUFXaUIsZ0JBQXRCO0FBQ0FkLFdBQU9hLEtBQUtFLEtBQUwsQ0FBVyxDQUFYLEVBQWEsQ0FBYixDQUFQO0FBQ0FiLFlBQVFXLEtBQUtFLEtBQUwsQ0FBVyxDQUFYLEVBQWEsQ0FBYixDQUFSO0FBQ0FkLFVBQU1ZLEtBQUtFLEtBQUwsQ0FBVyxDQUFYLEVBQWEsRUFBYixDQUFOOztBQUVBO0FBQ0FULGNBQVVULFdBQVdtQixRQUFyQjtBQUNBVCxjQUFVVixXQUFXb0IsUUFBckI7QUFDQVQsY0FBVSxDQUFDRCxVQUFVRCxPQUFYLElBQXNCLENBQWhDOztBQUdBSCxlQUFXTixXQUFXTSxRQUF0Qjs7QUFFQUUsY0FBVVIsV0FBV1EsT0FBWCxDQUFtQlUsS0FBbkIsQ0FBeUIsRUFBekIsRUFBNEIsRUFBNUIsQ0FBVjtBQUNBWCxhQUFTUCxXQUFXTyxNQUFYLENBQWtCVyxLQUFsQixDQUF3QixFQUF4QixFQUEyQixFQUEzQixDQUFUO0FBR0Q7QUFDRCxTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRSx1Q0FBSyxLQUFJLGdDQUFUO0FBREYsU0FERjtBQUlFLHFDQUFLLFdBQVUsUUFBZjtBQUpGLE9BREY7QUFPRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUdFO0FBQUE7QUFBQSxjQUFNLFdBQVUsZUFBaEI7QUFBaUNoQjtBQUFqQztBQUhGLFNBSkY7QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxjQUFoQjtBQUFnQ0c7QUFBaEMsV0FERjtBQUFBO0FBR0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxlQUFoQjtBQUFpQ0Q7QUFBakMsV0FIRjtBQUFBO0FBS0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxlQUFoQjtBQUFpQ0Q7QUFBakM7QUFMRixTQVRGO0FBZ0JFO0FBQUE7QUFBQSxZQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSx3Q0FBSSxXQUFVLFlBQWQsR0FERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGtCQUFkO0FBQWtDTTtBQUFsQyxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsY0FBZDtBQUE4QkU7QUFBOUIsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLG1CQUFkO0FBQW1DRDtBQUFuQyxhQUpGO0FBS0Usd0NBQUksV0FBVSxZQUFkO0FBTEY7QUFERixTQWhCRjtBQXlCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sV0FBVSxtQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtKLDBCQUFMO0FBQUE7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFGRixlQURGO0FBS0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFLRTtBQUFMO0FBRkYsZUFMRjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0Q7QUFBTDtBQUZGLGVBVEY7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBYkY7QUFERjtBQURGO0FBekJGO0FBUEY7QUFERixHQURGO0FBNERELENBOUZEOztBQWdHQWMsT0FBT3ZCLFVBQVAsR0FBb0JBLFVBQXBCOztBQUdVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJXZWF0aGVyYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFdlYXRoZXJib3ggPSAocHJvcHMpID0+IHtcbiAgLy8gSlNPTnByZXR0aWZ5KHByb3BzLndlYXRoZXIuaGFzT1ducHJvcGVydHkoKSk7XG4gIHZhciBjdXJyZW50U29sLCBzb2xzLCBzb2wsIHllYXIsIGRheSwgbW9udGgsIHByZXNzdXJlLCBzdW5zZXQsIHN1bnJpc2U7XG4gIHZhciBtaW5UZW1wLCBtYXhUZW1wLCBhdmdUZW1wO1xuXG4gIGlmKHByb3BzLndlYXRoZXIuaGFzT3duUHJvcGVydHkoJ3Jlc3VsdHMnKSkge1xuICAgIEpTT05wcmV0dGlmeShwcm9wcy53ZWF0aGVyLnJlc3VsdHNbMF0pO1xuXG4gICAgLy9Gb3JtYXQgZGF0YSwgcmVmYWN0b3IgbGF0ZXJcbiAgICBcblxuICAgIHNvbHMgPSBwcm9wcy53ZWF0aGVyLnJlc3VsdHM7XG4gICAgY3VycmVudFNvbCA9IHNvbHNbMF07XG4gICAgc29sID0gY3VycmVudFNvbC5zb2w7XG5cbiAgICAvL0VhcnRoIGRhdGFcbiAgICB2YXIgZGF0ZSA9IGN1cnJlbnRTb2wudGVycmVzdHJpYWxfZGF0ZTtcbiAgICB5ZWFyID0gZGF0ZS5zbGljZSgwLDQpO1xuICAgIG1vbnRoID0gZGF0ZS5zbGljZSg1LDcpO1xuICAgIGRheSA9IGRhdGUuc2xpY2UoOCwxMCk7XG5cbiAgICAvL1RlbXBlcmF0dXJlIERhdGFcbiAgICBtaW5UZW1wID0gY3VycmVudFNvbC5taW5fdGVtcDtcbiAgICBtYXhUZW1wID0gY3VycmVudFNvbC5tYXhfdGVtcDtcbiAgICBhdmdUZW1wID0gKG1heFRlbXAgKyBtaW5UZW1wKSAvIDI7XG5cblxuICAgIHByZXNzdXJlID0gY3VycmVudFNvbC5wcmVzc3VyZTtcblxuICAgIHN1bnJpc2UgPSBjdXJyZW50U29sLnN1bnJpc2Uuc2xpY2UoMTEsMTYpO1xuICAgIHN1bnNldCA9IGN1cnJlbnRTb2wuc3Vuc2V0LnNsaWNlKDExLDE2KTtcblxuXG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tbGFuZG1hcmsnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kbWFyayc+XG4gICAgICAgICAgICA8aW1nIHNyYz0naHR0cDovL2kuaW1ndXIuY29tL01wZlRoM0wucG5nJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nsb3Vkcyc+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLS1jaXR5bmFtZSc+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgT2x5bXB1cyBNb25zXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLS1kZXRhaWxzJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscy0tZGF5Jz5Tb2w8L3NwYW4+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRhdGUnPntzb2x9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLWRldGFpbHMnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS1kYXknPnttb250aH08L3NwYW4+XG4gICAgICAgICAgICAvXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRhdGUnPntkYXl9PC9zcGFuPlxuICAgICAgICAgICAgL1xuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS10aW1lJz57eWVhcn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tdGVtcGVyYXR1cmUnPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtaWQtdGVtcCBsZWZ0LTUwJz57bWluVGVtcH08L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjdXJyZW50LXRlbXAnPnthdmdUZW1wfTwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21pZC10ZW1wIHJpZ2h0LTUwJz57bWF4VGVtcH08L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLXRhYmxlJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlByZXNzdXJlOjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3ByZXNzdXJlfSA8c3Bhbj5QYTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlN1bnJpc2U6PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57c3VucmlzZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlN1bnNldDo8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntzdW5zZXR9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5KdWx5PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5Eb29sZXk8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG53aW5kb3cuV2VhdGhlcmJveCA9IFdlYXRoZXJib3g7XG5cblxuICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLXRlbXBlcmF0dXJlJz5cbiAgICAgICAgICAvLyAgIDx1bD5cbiAgICAgICAgICAvLyAgICAgPGxpIGNsYXNzTmFtZT0nb3V0ZXItdGVtcCc+MjM8L2xpPlxuICAgICAgICAgIC8vICAgICA8bGkgY2xhc3NOYW1lPSdtaWQtdGVtcCBsZWZ0LTUwJz4yNjwvbGk+XG4gICAgICAgICAgLy8gICAgIDxsaSBjbGFzc05hbWU9J2N1cnJlbnQtdGVtcCc+Mjk8L2xpPlxuICAgICAgICAgIC8vICAgICA8bGkgY2xhc3NOYW1lPSdtaWQtdGVtcCByaWdodC01MCc+Mjg8L2xpPlxuICAgICAgICAgIC8vICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz4zMDwvbGk+XG4gICAgICAgICAgLy8gICA8L3VsPlxuICAgICAgICAgIC8vIDwvZGl2PiJdfQ==