const events = require('events');
const order = require('../model/order');
const OrdersEvents = require('./events');

const MAX_ORDERS = 3;

class OrdersController extends events.EventEmitter {
  constructor() {
    super();
    this.ordersCount = 0
    this.ordersList = []
    this.ordersHistory = []
  }

  addOrder(orderDesc) {
    if (this.ordersCount >= MAX_ORDERS) {

    }
    let newOrder = order(orderDesc);
    this.ordersList.push(newOrder);
    this.ordersCount++;
    this.emit('addOrderEvent');
  }

  removeOrder(orderId) {
    if (orderId > this.ordersCount) {
      throw "no such order number";
    }
    this.ordersCount--;
    this.emit('removeOrderEvent', this.orderCount);
    return this.ordersList.splice(orderId - 1, 1)[0];
  }

  removeAllOrders() {
    this.ordersList = [];
    this.ordersCount = 0;
    this.emit('removeAllOrderEvent')
  }

  getOrder(orderId) {
    console.log(orderId);
    if (orderId > this.ordersCount) {
      return -1;
    }
    return this.ordersList[orderId - 1];
  }

  getAllOrders() {
    return this.ordersList;
  }

  getOrdersHistory() {
    return this.ordersHistory;
  }
}

module.exports = (() => {
  let instance;

  if (!instance) {
    ordersController = instance = new OrdersController();
    ordersController.on('addOrderEvent', OrdersEvents.addOrderEvent);
    ordersController.on('removeOrderEvent', OrdersEvents.removeOrderEvent);
    ordersController.on('removeAllOrderEvent', OrdersEvents.removeAllOrdersEvent);
  }
  return ordersController;
})();