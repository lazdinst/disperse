'use strict';

var Weatherbox = function Weatherbox(props) {
  // JSONprettify(props.weather.hasOWnproperty());
  var currentSol, sols, sol, year, day, month;

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
        )
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
          React.createElement(
            'li',
            { className: 'outer-temp' },
            '22'
          ),
          React.createElement(
            'li',
            { className: 'mid-temp left-50' },
            '26'
          ),
          React.createElement(
            'li',
            { className: 'current-temp' },
            '29'
          ),
          React.createElement(
            'li',
            { className: 'mid-temp right-50' },
            '28'
          ),
          React.createElement(
            'li',
            { className: 'outer-temp' },
            '30'
          )
        )
      )
    )
  );
};

window.Weatherbox = Weatherbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dlYXRoZXJib3guanN4Il0sIm5hbWVzIjpbIldlYXRoZXJib3giLCJwcm9wcyIsImN1cnJlbnRTb2wiLCJzb2xzIiwic29sIiwieWVhciIsImRheSIsIm1vbnRoIiwid2VhdGhlciIsImhhc093blByb3BlcnR5IiwiSlNPTnByZXR0aWZ5IiwicmVzdWx0cyIsImRhdGUiLCJ0ZXJyZXN0cmlhbF9kYXRlIiwic2xpY2UiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUMxQjtBQUNBLE1BQUlDLFVBQUosRUFBZ0JDLElBQWhCLEVBQXNCQyxHQUF0QixFQUEyQkMsSUFBM0IsRUFBaUNDLEdBQWpDLEVBQXNDQyxLQUF0Qzs7QUFFQSxNQUFHTixNQUFNTyxPQUFOLENBQWNDLGNBQWQsQ0FBNkIsU0FBN0IsQ0FBSCxFQUE0QztBQUMxQ0MsaUJBQWFULE1BQU1PLE9BQU4sQ0FBY0csT0FBZCxDQUFzQixDQUF0QixDQUFiOztBQUVBOzs7QUFHQVIsV0FBT0YsTUFBTU8sT0FBTixDQUFjRyxPQUFyQjtBQUNBVCxpQkFBYUMsS0FBSyxDQUFMLENBQWI7QUFDQUMsVUFBTUYsV0FBV0UsR0FBakI7O0FBRUE7QUFDQSxRQUFJUSxPQUFPVixXQUFXVyxnQkFBdEI7QUFDQVIsV0FBT08sS0FBS0UsS0FBTCxDQUFXLENBQVgsRUFBYSxDQUFiLENBQVA7QUFDQVAsWUFBUUssS0FBS0UsS0FBTCxDQUFXLENBQVgsRUFBYSxDQUFiLENBQVI7QUFDQVIsVUFBTU0sS0FBS0UsS0FBTCxDQUFXLENBQVgsRUFBYSxFQUFiLENBQU47QUFFRDtBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFLHVDQUFLLEtBQUksZ0NBQVQ7QUFERixTQURGO0FBSUUscUNBQUssV0FBVSxRQUFmO0FBSkYsT0FERjtBQU9FO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FQRjtBQVlFO0FBQUE7QUFBQSxVQUFLLFdBQVUsdUJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGVBQWhCO0FBQWlDVjtBQUFqQztBQUhGLE9BWkY7QUFpQkU7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVUsY0FBaEI7QUFBZ0NHO0FBQWhDLFNBREY7QUFBQTtBQUdFO0FBQUE7QUFBQSxZQUFNLFdBQVUsZUFBaEI7QUFBaUNEO0FBQWpDLFNBSEY7QUFBQTtBQUtFO0FBQUE7QUFBQSxZQUFNLFdBQVUsZUFBaEI7QUFBaUNEO0FBQWpDO0FBTEYsT0FqQkY7QUF3QkU7QUFBQTtBQUFBLFVBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsa0JBQWQ7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLFdBSEY7QUFJRTtBQUFBO0FBQUEsY0FBSSxXQUFVLG1CQUFkO0FBQUE7QUFBQSxXQUpGO0FBS0U7QUFBQTtBQUFBLGNBQUksV0FBVSxZQUFkO0FBQUE7QUFBQTtBQUxGO0FBREY7QUF4QkY7QUFERixHQURGO0FBc0NELENBM0REOztBQTZEQVUsT0FBT2YsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiV2VhdGhlcmJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXZWF0aGVyYm94ID0gKHByb3BzKSA9PiB7XG4gIC8vIEpTT05wcmV0dGlmeShwcm9wcy53ZWF0aGVyLmhhc09XbnByb3BlcnR5KCkpO1xuICB2YXIgY3VycmVudFNvbCwgc29scywgc29sLCB5ZWFyLCBkYXksIG1vbnRoO1xuXG4gIGlmKHByb3BzLndlYXRoZXIuaGFzT3duUHJvcGVydHkoJ3Jlc3VsdHMnKSkge1xuICAgIEpTT05wcmV0dGlmeShwcm9wcy53ZWF0aGVyLnJlc3VsdHNbMF0pO1xuXG4gICAgLy9Gb3JtYXQgZGF0YSwgcmVmYWN0b3IgbGF0ZXJcbiAgICBcblxuICAgIHNvbHMgPSBwcm9wcy53ZWF0aGVyLnJlc3VsdHM7XG4gICAgY3VycmVudFNvbCA9IHNvbHNbMF07XG4gICAgc29sID0gY3VycmVudFNvbC5zb2w7XG5cbiAgICAvL0VhcnRoIGRhdGFcbiAgICB2YXIgZGF0ZSA9IGN1cnJlbnRTb2wudGVycmVzdHJpYWxfZGF0ZTtcbiAgICB5ZWFyID0gZGF0ZS5zbGljZSgwLDQpO1xuICAgIG1vbnRoID0gZGF0ZS5zbGljZSg1LDcpO1xuICAgIGRheSA9IGRhdGUuc2xpY2UoOCwxMCk7XG5cbiAgfVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLS1sYW5kbWFyayc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRtYXJrJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwOi8vaS5pbWd1ci5jb20vTXBmVGgzTC5wbmcnLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xvdWRzJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLWNpdHluYW1lJz5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBPbHltcHVzIE1vbnNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tZGV0YWlscyc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS1kYXknPlNvbDwvc3Bhbj5cbiAgICAgICAgICA6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS1kYXRlJz57c29sfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLWRldGFpbHMnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscy0tZGF5Jz57bW9udGh9PC9zcGFuPlxuICAgICAgICAgIC9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRhdGUnPntkYXl9PC9zcGFuPlxuICAgICAgICAgIC9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLXRpbWUnPnt5ZWFyfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLXRlbXBlcmF0dXJlJz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz4yMjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtaWQtdGVtcCBsZWZ0LTUwJz4yNjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjdXJyZW50LXRlbXAnPjI5PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21pZC10ZW1wIHJpZ2h0LTUwJz4yODwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz4zMDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxud2luZG93LldlYXRoZXJib3ggPSBXZWF0aGVyYm94OyJdfQ==