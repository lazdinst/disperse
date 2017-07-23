'use strict';

var Weatherbox = function Weatherbox(props) {

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
          'Monday'
        ),
        '|',
        React.createElement(
          'span',
          { className: 'details--date' },
          'Sep 12'
        ),
        '|',
        React.createElement(
          'span',
          { className: 'details--time' },
          '12:34'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dlYXRoZXJib3guanN4Il0sIm5hbWVzIjpbIldlYXRoZXJib3giLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXOztBQUUxQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRSx1Q0FBSyxLQUFJLGdDQUFUO0FBREYsU0FERjtBQUlFLHFDQUFLLFdBQVUsUUFBZjtBQUpGLE9BREY7QUFPRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BUEY7QUFZRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQUEsU0FERjtBQUFBO0FBR0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQUEsU0FIRjtBQUFBO0FBS0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQUE7QUFMRixPQVpGO0FBbUJFO0FBQUE7QUFBQSxVQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLFlBQWQ7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGtCQUFkO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUksV0FBVSxjQUFkO0FBQUE7QUFBQSxXQUhGO0FBSUU7QUFBQTtBQUFBLGNBQUksV0FBVSxtQkFBZDtBQUFBO0FBQUEsV0FKRjtBQUtFO0FBQUE7QUFBQSxjQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUE7QUFMRjtBQURGO0FBbkJGO0FBREYsR0FERjtBQWlDRCxDQW5DRDs7QUFxQ0FDLE9BQU9GLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6IldlYXRoZXJib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgV2VhdGhlcmJveCA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLWxhbmRtYXJrJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZG1hcmsnPlxuICAgICAgICAgICAgPGltZyBzcmM9J2h0dHA6Ly9pLmltZ3VyLmNvbS9NcGZUaDNMLnBuZycvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbG91ZHMnPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY2FyZC0tY2l0eW5hbWUnPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIE9seW1wdXMgTW9uc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jYXJkLS1kZXRhaWxzJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRheSc+TW9uZGF5PC9zcGFuPlxuICAgICAgICAgIHxcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMtLWRhdGUnPlNlcCAxMjwvc3Bhbj5cbiAgICAgICAgICB8XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzLS10aW1lJz4xMjozNDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNhcmQtLXRlbXBlcmF0dXJlJz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz4yMjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtaWQtdGVtcCBsZWZ0LTUwJz4yNjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjdXJyZW50LXRlbXAnPjI5PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21pZC10ZW1wIHJpZ2h0LTUwJz4yODwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdvdXRlci10ZW1wJz4zMDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxud2luZG93LldlYXRoZXJib3ggPSBXZWF0aGVyYm94OyJdfQ==