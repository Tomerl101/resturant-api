const eventsConfig = require('./config').events;

function addOrderEvent() {
  this.ordersHistory.push(eventsConfig.ADD_ORDER + this.ordersCount);
  console.log(eventsConfig.ADD_ORDER + this.ordersCount);
}

function removeOrderEvent() {
  this.ordersHistory.push(eventsConfig.REMOVE_ORDER + this.ordersCount);
  console.log(eventsConfig.REMOVE_ORDER + this.ordersCount);
}

function removeAllOrdersEvent() {
  this.ordersHistory.push(eventsConfig.CLEAR_ORDERS + this.ordersCount);
  console.log(eventsConfig.CLEAR_ORDERS + this.ordersCount);
}

module.exports = {
  addOrderEvent,
  removeOrderEvent,
  removeAllOrdersEvent
}