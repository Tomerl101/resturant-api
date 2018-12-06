class Order {
  constructor(orderDesc) {
    this.desc = orderDesc
  }

};

module.exports = (orderDesc) => {
  let order = new Order(orderDesc);
  return order;
}