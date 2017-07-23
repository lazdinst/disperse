"use strict";

// var marsData = (callback) => {
//   $.ajax({
//     url: 'http://marsweather.ingenology.com/v1/archive/?page=1&format=jsonp',
//     type: 'GET',
//     dataType: 'jsonp',
//     crossDomain:true,
//     success: callback,
//     error: function(err) {
//       console.log('ERROR ', err);
//     }
//   });
// };


// var marsData = (callback) => {
//   $.get('http://marsweather.ingenology.com/v1/archive/?page=1&format=jsonp', {
//     type: 'GET',
//     dataType: 'jsonp',
//     crossDomain:true
//   })
//   .done(({items}) => {
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     console.log(responseJSON);
//   });
// };

window.marsData = marsData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbWFyc0RhdGEuanMiXSwibmFtZXMiOlsid2luZG93IiwibWFyc0RhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLE9BQU9DLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6Im1hcnNEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIG1hcnNEYXRhID0gKGNhbGxiYWNrKSA9PiB7XG4vLyAgICQuYWpheCh7XG4vLyAgICAgdXJsOiAnaHR0cDovL21hcnN3ZWF0aGVyLmluZ2Vub2xvZ3kuY29tL3YxL2FyY2hpdmUvP3BhZ2U9MSZmb3JtYXQ9anNvbnAnLFxuLy8gICAgIHR5cGU6ICdHRVQnLFxuLy8gICAgIGRhdGFUeXBlOiAnanNvbnAnLFxuLy8gICAgIGNyb3NzRG9tYWluOnRydWUsXG4vLyAgICAgc3VjY2VzczogY2FsbGJhY2ssXG4vLyAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuLy8gICAgICAgY29uc29sZS5sb2coJ0VSUk9SICcsIGVycik7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH07XG5cblxuLy8gdmFyIG1hcnNEYXRhID0gKGNhbGxiYWNrKSA9PiB7XG4vLyAgICQuZ2V0KCdodHRwOi8vbWFyc3dlYXRoZXIuaW5nZW5vbG9neS5jb20vdjEvYXJjaGl2ZS8/cGFnZT0xJmZvcm1hdD1qc29ucCcsIHtcbi8vICAgICB0eXBlOiAnR0VUJyxcbi8vICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbi8vICAgICBjcm9zc0RvbWFpbjp0cnVlXG4vLyAgIH0pXG4vLyAgIC5kb25lKCh7aXRlbXN9KSA9PiB7XG4vLyAgICAgaWYgKGNhbGxiYWNrKSB7XG4vLyAgICAgICBjYWxsYmFjayhpdGVtcyk7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT04pO1xuLy8gICB9KTtcbi8vIH07XG5cbndpbmRvdy5tYXJzRGF0YSA9IG1hcnNEYXRhOyJdfQ==