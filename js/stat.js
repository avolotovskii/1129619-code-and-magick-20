'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_Y = 250;
var TEXT_Y = 270;
var TEXT_X = 100;
var TEXT_WIDTH = 50;
var barHeight = 150;
var COLOR_WINER = 'rgba(255, 0, 0, 1)';
var COLORS = ['rgba(23, 37, 191, 1)', 'rgba(0, 21, 255, 1)', 'rgba(35, 92, 235, 1)', 'rgba(23, 37, 191, 0.7)'];
var COLOR_SHADOW = 'rgba(0, 0, 0, 0.7)';
var COLOR_BACKGROUND = '#fff';
var PLAYER_WINER = 'Вы';
var FONT_CONGRATULATION = '16px PT Mono';
var COLOR_CONGRATULATION = '#000';
var TEXT_WINER = 'Ура вы победили!';
var TEXT_STAT = 'Список результатов:';
var TEXT_WINER_X = 110;
var TEXT_WINER_Y = 45;
var TEXT_STAT_Y = 60;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (items) {
  return Math.max.apply(null, items);
};

var colorBar = function (player) {
  if (player === PLAYER_WINER) {
    var color = COLOR_WINER;
  } else {
    for (var i = 0; i < COLORS.length; i++) {
      color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
  }
  return color;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_BACKGROUND);

  ctx.font = FONT_CONGRATULATION;
  ctx.fillStyle = COLOR_CONGRATULATION;
  ctx.fillText(TEXT_WINER, TEXT_WINER_X, TEXT_WINER_Y);
  ctx.fillText(TEXT_STAT, TEXT_WINER_X, TEXT_STAT_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var coordinateX = TEXT_X * (i + 1) + TEXT_WIDTH;
    var coordinateY = (barHeight * times[i]) / maxTime;
    ctx.fillText(Math.floor(times[i]), coordinateX, BAR_Y - coordinateY - GAP);
    ctx.fillStyle = colorBar(players[i]);
    ctx.fillRect(coordinateX, BAR_Y, BAR_WIDTH, -coordinateY);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], coordinateX, TEXT_Y);
  }
};
