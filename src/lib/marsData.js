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