// Generated by CoffeeScript 1.6.2
var Alarm, americano;

americano = require('americano-cozy');

module.exports = Alarm = americano.getModel('Alarm', {
  action: {
    type: String,
    "default": 'DISPLAY'
  },
  trigg: String,
  rrule: String,
  description: String,
  related: {
    type: String,
    "default": null
  }
});

Alarm.all = function(params, callback) {
  return Alarm.request("all", params, callback);
};
