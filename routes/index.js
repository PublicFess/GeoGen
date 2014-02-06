'use strict';

var app = require('../app');

app.get('/', function(req, res, next){
  res.render('index');
});

app.get('/array', function(req, res, next){
  var arr = new Array(100);
  arr[0] = {
    x: 0,
    y: 200
  };
  arr[99] = {
    x: 99,
    y: 200
  };
  var R = 3;
  function generate(startIdx, endIdx) {
    if (startIdx == endIdx) return;
    var idx = Math.floor((startIdx + endIdx) / 2);
    if (arr[idx] ) return;
    var max = R*(arr[endIdx].x - arr[startIdx].x);
    var min = (-1)*R*(arr[endIdx].x - arr[startIdx].x);
    var height = ((arr[startIdx].y + arr[endIdx].y) / 2)
      + Math.random() * (max - min) + min;
    arr[idx] = {
      x: idx,
      y: height
    };
    generate(startIdx, idx);
    generate(idx, endIdx);
    return;
  }

  generate(0, 99);

  var result = [];
  arr.forEach(function(point){
    result.push(point.x*8);
    result.push(point.y);
  });

  res.json({
    points: result
  })
});