'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { weather: _this.marsData(_this.getMarsWeatherSucess) };
    _this.getMarsWeatherData = _this.getMarsWeatherData.bind(_this);
    _this.getMarsWeatherSucess = _this.getMarsWeatherSucess.bind(_this);
    _this.marsData = _this.marsData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'getMarsWeatherData',
    value: function getMarsWeatherData() {
      marsData(this.getMarsWeatherSucess);
    }
  }, {
    key: 'getMarsWeatherSucess',
    value: function getMarsWeatherSucess(data, context) {
      console.log(JSONprettify(data));
      console.log(context);
      context.setState({ weather: data });
    }
  }, {
    key: 'marsData',
    value: function marsData(callback) {
      var context = this;
      $.ajax({
        url: 'http://marsweather.ingenology.com/v1/archive/?page=1&format=jsonp',
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        success: function success(data) {
          callback(data, context);
        },
        error: function error(err) {
          console.log('ERROR ', err);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { getMarsWeatherData: this.getMarsWeatherData }),
        React.createElement(
          'div',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIndlYXRoZXIiLCJtYXJzRGF0YSIsImdldE1hcnNXZWF0aGVyU3VjZXNzIiwiZ2V0TWFyc1dlYXRoZXJEYXRhIiwiYmluZCIsImRhdGEiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsIkpTT05wcmV0dGlmeSIsInNldFN0YXRlIiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImNyb3NzRG9tYWluIiwic3VjY2VzcyIsImVycm9yIiwiZXJyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsU0FBUyxNQUFLQyxRQUFMLENBQWMsTUFBS0Msb0JBQW5CLENBQVYsRUFBYjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixPQUExQjtBQUNBLFVBQUtGLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRSxJQUExQixPQUE1QjtBQUNBLFVBQUtILFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRyxJQUFkLE9BQWhCO0FBTGtCO0FBTW5COzs7O3lDQUVvQjtBQUNuQkgsZUFBUyxLQUFLQyxvQkFBZDtBQUNEOzs7eUNBRXFCRyxJLEVBQU1DLE8sRUFBUztBQUNuQ0MsY0FBUUMsR0FBUixDQUFZQyxhQUFhSixJQUFiLENBQVo7QUFDQUUsY0FBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0FBLGNBQVFJLFFBQVIsQ0FBaUIsRUFBQ1YsU0FBU0ssSUFBVixFQUFqQjtBQUNEOzs7NkJBRVNNLFEsRUFBVTtBQUNsQixVQUFJTCxVQUFVLElBQWQ7QUFDQU0sUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssbUVBREE7QUFFTEMsY0FBTSxLQUZEO0FBR0xDLGtCQUFVLE9BSEw7QUFJTEMscUJBQVksSUFKUDtBQUtMQyxpQkFBUyxpQkFBU2IsSUFBVCxFQUFlO0FBQ3RCTSxtQkFBU04sSUFBVCxFQUFlQyxPQUFmO0FBQ0QsU0FQSTtBQVFMYSxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQmIsa0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWSxHQUF0QjtBQUNEO0FBVkksT0FBUDtBQVlEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxvQkFBb0IsS0FBS2pCLGtCQUFqQyxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsT0FBRCxJQUFTLFNBQVMsS0FBS0osS0FBTCxDQUFXQyxPQUE3QjtBQURGLFNBRkY7QUFLRSw0QkFBQyxNQUFEO0FBTEYsT0FERjtBQVNEOzs7O0VBN0NlcUIsTUFBTUMsUzs7QUFnRHhCQyxPQUFPMUIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3dlYXRoZXI6IHRoaXMubWFyc0RhdGEodGhpcy5nZXRNYXJzV2VhdGhlclN1Y2Vzcyl9O1xuICAgIHRoaXMuZ2V0TWFyc1dlYXRoZXJEYXRhID0gdGhpcy5nZXRNYXJzV2VhdGhlckRhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldE1hcnNXZWF0aGVyU3VjZXNzID0gdGhpcy5nZXRNYXJzV2VhdGhlclN1Y2Vzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWFyc0RhdGEgPSB0aGlzLm1hcnNEYXRhLmJpbmQodGhpcylcbiAgfVxuXG4gIGdldE1hcnNXZWF0aGVyRGF0YSgpIHtcbiAgICBtYXJzRGF0YSh0aGlzLmdldE1hcnNXZWF0aGVyU3VjZXNzKTtcbiAgfVxuXG4gIGdldE1hcnNXZWF0aGVyU3VjZXNzIChkYXRhLCBjb250ZXh0KSB7XG4gICAgY29uc29sZS5sb2coSlNPTnByZXR0aWZ5KGRhdGEpKTtcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICBjb250ZXh0LnNldFN0YXRlKHt3ZWF0aGVyOiBkYXRhfSk7XG4gIH1cblxuICBtYXJzRGF0YSAoY2FsbGJhY2spIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9tYXJzd2VhdGhlci5pbmdlbm9sb2d5LmNvbS92MS9hcmNoaXZlLz9wYWdlPTEmZm9ybWF0PWpzb25wJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29ucCcsXG4gICAgICBjcm9zc0RvbWFpbjp0cnVlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhkYXRhLCBjb250ZXh0KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiAnLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIGdldE1hcnNXZWF0aGVyRGF0YT17dGhpcy5nZXRNYXJzV2VhdGhlckRhdGF9Lz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q29udGVudCB3ZWF0aGVyPXt0aGlzLnN0YXRlLndlYXRoZXJ9Lz4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19