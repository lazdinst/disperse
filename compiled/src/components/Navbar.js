"use strict";

var Navbar = function Navbar(props) {

  return React.createElement(
    "nav",
    { className: "navbar navbar-default navbar-static-top" },
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "a",
          { className: "navbar-brand", href: "#", onClick: function onClick(e) {
              props.getMarsWeatherData(e);
            } },
          React.createElement("img", { alt: "Mars Weather", width: "25px", src: "http://i.imgur.com/MOLJU38.png" })
        )
      ),
      React.createElement(
        "div",
        { className: "pull-right" },
        "Mars Weather"
      )
    )
  );
};

window.Navbar = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJlIiwiZ2V0TWFyc1dlYXRoZXJEYXRhIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7O0FBRXRCLFNBQ0k7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQyxFQUFxQyxTQUFTLGlCQUFDQyxDQUFELEVBQU87QUFDbkRELG9CQUFNRSxrQkFBTixDQUF5QkQsQ0FBekI7QUFDRCxhQUZEO0FBR0UsdUNBQUssS0FBSSxjQUFULEVBQXdCLE9BQU0sTUFBOUIsRUFBcUMsS0FBSSxnQ0FBekM7QUFIRjtBQURGLE9BREY7QUFRRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFBO0FBUkY7QUFERixHQURKO0FBY0QsQ0FoQkQ7O0FBa0JBRSxPQUFPSixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTmF2YmFyID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMuZ2V0TWFyc1dlYXRoZXJEYXRhKGUpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiTWFycyBXZWF0aGVyXCIgd2lkdGg9XCIyNXB4XCIgc3JjPVwiaHR0cDovL2kuaW1ndXIuY29tL01PTEpVMzgucG5nXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPk1hcnMgV2VhdGhlcjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICApO1xufVxuXG53aW5kb3cuTmF2YmFyID0gTmF2YmFyOyJdfQ==