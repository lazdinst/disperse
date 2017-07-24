'use strict';

var marsData = function marsData(callback, context) {
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
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbWFyc0RhdGEuanMiXSwibmFtZXMiOlsibWFyc0RhdGEiLCJjYWxsYmFjayIsImNvbnRleHQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImNyb3NzRG9tYWluIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBV0MsT0FBWCxFQUF1QjtBQUNwQ0MsSUFBRUMsSUFBRixDQUFPO0FBQ0xDLFNBQUssbUVBREE7QUFFTEMsVUFBTSxLQUZEO0FBR0xDLGNBQVUsT0FITDtBQUlMQyxpQkFBWSxJQUpQO0FBS0xDLGFBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0QlQsZUFBU1MsSUFBVCxFQUFlUixPQUFmO0FBQ0QsS0FQSTtBQVFMUyxXQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQkMsY0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JGLEdBQXRCO0FBQ0Q7QUFWSSxHQUFQO0FBWUQsQ0FiRDs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRyxPQUFPZixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJtYXJzRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXJzRGF0YSA9IChjYWxsYmFjaywgY29udGV4dCkgPT4ge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHA6Ly9tYXJzd2VhdGhlci5pbmdlbm9sb2d5LmNvbS92MS9hcmNoaXZlLz9wYWdlPTEmZm9ybWF0PWpzb25wJyxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBkYXRhVHlwZTogJ2pzb25wJyxcbiAgICBjcm9zc0RvbWFpbjp0cnVlLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNhbGxiYWNrKGRhdGEsIGNvbnRleHQpO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SICcsIGVycik7XG4gICAgfVxuICB9KTtcbn07XG5cblxuLy8gdmFyIG1hcnNEYXRhID0gKGNhbGxiYWNrKSA9PiB7XG4vLyAgICQuZ2V0KCdodHRwOi8vbWFyc3dlYXRoZXIuaW5nZW5vbG9neS5jb20vdjEvYXJjaGl2ZS8/cGFnZT0xJmZvcm1hdD1qc29ucCcsIHtcbi8vICAgICB0eXBlOiAnR0VUJyxcbi8vICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbi8vICAgICBjcm9zc0RvbWFpbjp0cnVlXG4vLyAgIH0pXG4vLyAgIC5kb25lKCh7aXRlbXN9KSA9PiB7XG4vLyAgICAgaWYgKGNhbGxiYWNrKSB7XG4vLyAgICAgICBjYWxsYmFjayhpdGVtcyk7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT04pO1xuLy8gICB9KTtcbi8vIH07XG5cbndpbmRvdy5tYXJzRGF0YSA9IG1hcnNEYXRhOyJdfQ==