"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getMarsWeatherData = _this.getMarsWeatherData.bind(_this);
    _this.getMarsWeatherSucess = _this.getMarsWeatherSucess.bind(_this);
    // this.marsData = this.marsData.bind(this);
    _this.state = { weather: {} };
    return _this;
  }

  _createClass(App, [{
    key: "getMarsWeatherData",
    value: function getMarsWeatherData() {
      var context = this;
      marsData(this.getMarsWeatherSucess, context);
    }
  }, {
    key: "getMarsWeatherSucess",
    value: function getMarsWeatherSucess(data, context) {
      context.setState({ weather: data });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMarsWeatherData();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { getMarsWeatherData: this.getMarsWeatherData }),
        React.createElement(
          "div",
          null,
          React.createElement(Content, { weather: this.state.weather })
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJnZXRNYXJzV2VhdGhlckRhdGEiLCJiaW5kIiwiZ2V0TWFyc1dlYXRoZXJTdWNlc3MiLCJzdGF0ZSIsIndlYXRoZXIiLCJjb250ZXh0IiwibWFyc0RhdGEiLCJkYXRhIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsMEdBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRCxJQUExQixPQUE1QjtBQUNBO0FBQ0EsVUFBS0UsS0FBTCxHQUFhLEVBQUNDLFNBQVMsRUFBVixFQUFiO0FBTGtCO0FBTW5COzs7O3lDQUVvQjtBQUNuQixVQUFJQyxVQUFVLElBQWQ7QUFDQUMsZUFBUyxLQUFLSixvQkFBZCxFQUFvQ0csT0FBcEM7QUFDRDs7O3lDQUVxQkUsSSxFQUFNRixPLEVBQVM7QUFDbkNBLGNBQVFHLFFBQVIsQ0FBaUIsRUFBQ0osU0FBU0csSUFBVixFQUFqQjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtQLGtCQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLG9CQUFvQixLQUFLQSxrQkFBakMsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLE9BQUQsSUFBUyxTQUFTLEtBQUtHLEtBQUwsQ0FBV0MsT0FBN0I7QUFERixTQUZGO0FBS0UsNEJBQUMsTUFBRDtBQUxGLE9BREY7QUFTRDs7OztFQWhDZUssTUFBTUMsUzs7QUFtQ3hCQyxPQUFPYixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0TWFyc1dlYXRoZXJEYXRhID0gdGhpcy5nZXRNYXJzV2VhdGhlckRhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldE1hcnNXZWF0aGVyU3VjZXNzID0gdGhpcy5nZXRNYXJzV2VhdGhlclN1Y2Vzcy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMubWFyc0RhdGEgPSB0aGlzLm1hcnNEYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt3ZWF0aGVyOiB7fX07XG4gIH1cbiAgXG4gIGdldE1hcnNXZWF0aGVyRGF0YSgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgbWFyc0RhdGEodGhpcy5nZXRNYXJzV2VhdGhlclN1Y2VzcywgY29udGV4dCk7XG4gIH1cblxuICBnZXRNYXJzV2VhdGhlclN1Y2VzcyAoZGF0YSwgY29udGV4dCkge1xuICAgIGNvbnRleHQuc2V0U3RhdGUoe3dlYXRoZXI6IGRhdGF9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0TWFyc1dlYXRoZXJEYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgZ2V0TWFyc1dlYXRoZXJEYXRhPXt0aGlzLmdldE1hcnNXZWF0aGVyRGF0YX0vPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb250ZW50IHdlYXRoZXI9e3RoaXMuc3RhdGUud2VhdGhlcn0vPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=