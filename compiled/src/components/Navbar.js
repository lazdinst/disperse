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
          React.createElement("img", { alt: "Mars Weather", width: "25px", src: "https://image.flaticon.com/icons/svg/181/181779.svg" })
        )
      )
    )
  );
};

window.Navbar = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJlIiwiZ2V0TWFyc1dlYXRoZXJEYXRhIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7O0FBRXRCLFNBQ0k7QUFBQTtBQUFBLE1BQUssV0FBVSx5Q0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQyxFQUFxQyxTQUFTLGlCQUFDQyxDQUFELEVBQU87QUFDbkRELG9CQUFNRSxrQkFBTixDQUF5QkQsQ0FBekI7QUFDRCxhQUZEO0FBR0UsdUNBQUssS0FBSSxjQUFULEVBQXdCLE9BQU0sTUFBOUIsRUFBcUMsS0FBSSxxREFBekM7QUFIRjtBQURGO0FBREY7QUFERixHQURKO0FBYUQsQ0FmRDs7QUFpQkFFLE9BQU9KLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXZiYXIgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4oXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItc3RhdGljLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5nZXRNYXJzV2VhdGhlckRhdGEoZSk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJNYXJzIFdlYXRoZXJcIiB3aWR0aD1cIjI1cHhcIiBzcmM9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTgxLzE4MTc3OS5zdmdcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICk7XG59XG5cbndpbmRvdy5OYXZiYXIgPSBOYXZiYXI7Il19