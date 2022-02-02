// // Chart.js scripts
// // -- Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';
// //function that makes an array of days of current month
// function getDaysInMonth(year, month) {
//   var date = new Date(year, month, 1);
//   var days = [];
//   while (date.getMonth() === month) {
//     days.push(new Date(date).getDate());
//     date.setDate(date.getDate() + 1);
//   }
//   return days;
// }
// //function that get the current month
// function getCurrentMonth() {
//   var date = new Date();
//   var month = date.getMonth();
//   return month;
// }
// //function that get the current year
// function getCurrentYear() {
//   var date = new Date();
//   var year = date.getFullYear();
//   return year;
// }



// async function initviews() {
//   let x = getDaysInMonth(getCurrentYear(), getCurrentMonth());
//   let y = [];
//   y = await AvocatAnalyticsViews();

//   var ctx = document.getElementById("myAreaChart");
//   var myLineChart = new Chart(ctx, {

//     type: 'line',
//     data: {
//       labels: x,
//       datasets: [{
//         label: "Sessions",
//         lineTension: 0.3,
//         backgroundColor: "rgba(2,117,216,0.2)",
//         borderColor: "rgba(2,117,216,1)",
//         pointRadius: 5,
//         pointBackgroundColor: "rgba(2,117,216,1)",
//         pointBorderColor: "rgba(255,255,255,0.8)",
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgba(2,117,216,1)",
//         pointHitRadius: 20,
//         pointBorderWidth: 2,
//         data: y,
//       }],
//     },
//     options: {
//       scales: {
//         xAxes: [{
//           time: {
//             unit: 'date'
//           },
//           gridLines: {
//             display: false
//           },
//           ticks: {
//             maxTicksLimit: 7
//           }
//         }],
//         yAxes: [{
//           ticks: {
//             min: 0,
//             max: 100,
//             maxTicksLimit: 5
//           },
//           gridLines: {
//             color: "rgba(0, 0, 0, .125)",
//           }
//         }],
//       },
//       legend: {
//         display: false
//       }
//     }
//   });
// }
// async function initcalls() {
//   y = await AvocatAnalyticsCalls();
//   var ctx = document.getElementById("myBarChart");
//   var myLineChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
//       datasets: [{
//         label: "Calls",
//         backgroundColor: "rgba(2,117,216,1)",
//         borderColor: "rgba(2,117,216,1)",
//         data: y,
//       }],
//     },
//     options: {
//       scales: {
//         xAxes: [{
//           time: {
//             unit: 'month'
//           },
//           gridLines: {
//             display: false
//           },
//           ticks: {
//             maxTicksLimit: 6
//           }
//         }],
//         yAxes: [{
//           ticks: {
//             min: 0,
//             max: 150,
//             maxTicksLimit: 5
//           },
//           gridLines: {
//             display: true
//           }
//         }],
//       },
//       legend: {
//         display: false
//       }
//     }
//   });
// }
// initviews();
// // initcalls();




// async function AvocatAnalyticsViews() {
//   var getUrl = window.location;
//   var baseUrl = getUrl.protocol + "//" + getUrl.host + "/avocat/business/";
//   let res = await fetch(baseUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
//     .then(function (response) {
//       return response.json();
//     });
//   var AvocatAnalytics = res.AvocatAnalytics;

//   var mydate = new Date();
//   var m = mydate.getMonth();
//   var y = mydate.getFullYear();
//   var d = new Date(y, m, 1);

//   var tableviews = [];
//   while (d.getMonth() == m) {

//     for (var i = 1; i < AvocatAnalytics.length; i++) {

//       var views = AvocatAnalytics[i].views;
//       var date = AvocatAnalytics[i].date['date'];
//       var Avoday = date.substring(8, 10);
//       // var month = date.substring(5,7);
//       if (Avoday == d.getDate().toString()) {
//         tableviews.push(views);

//       } else {
//         tableviews.push(0);
//       }

//       d.setDate(d.getDate() + 1);
//     }
//   }
//   return tableviews;
// }

// // async function AvocatAnalyticsCalls() {
// //   var getUrl = window.location;
// //   var baseUrl = getUrl.protocol + "//" + getUrl.host + "/avocat/business/";
// //   let res = await fetch(baseUrl, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
// //     .then(function (response) {
// //       return response.json();
// //     });
// //   let AvocatAnalyticsCalls = res.AvocatAnalytics;
// //   var mydate = new Date();
// //   var m = mydate.getMonth();
// //   var y = mydate.getFullYear();
// //   var d = new Date(y, 1, 1);

// //   var tablecalls = [];
// //   while (d.getMonth() < 12) {

// //     for (var i = 1; i < AvocatAnalyticsCalls.length; i++) {

// //       var calls = AvocatAnalyticsCalls[i].calls;
// //       var date = AvocatAnalyticsCalls[i].date['date'];
// //       // var Avoday = date.substring(8, 10);
// //       var month = date.substring(5,7);
// //       // let x = parseInt(month);

// //       if (parseInt(month) == d.getMonth()) {
// //         tablecalls.push(calls);

// //       } else {
// //         tablecalls.push(0);
// //       }

// //       d.setDate(d.getMonth() + 1);
// //     }
// //   }
// //   return tablecalls;
// // }