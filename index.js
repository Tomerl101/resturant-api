const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const ordersController = require('./controller');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make some dummy actions
ordersController.addOrder('pizza');
ordersController.addOrder('pasta');
ordersController.addOrder('cake');
ordersController.removeOrder(2);
ordersController.addOrder('apple');
ordersController.removeAllOrders()
ordersController.addOrder('shawarma!');


app.get('/', (req, res) => {
  res.status(200).json(ordersController.getOrdersHistory());
})
app.get('/order/:order_id', (req, res) => {
  let { desc } = ordersController.getOrder(req.params.order_id)
  res.status(200).json(desc);
})
app.get('/orders', (req, res) => {
  let data = ordersController.getAllOrders();
  res.status(200).json(data);
})
app.get('/history', (req, res) => {
  let data = ordersController.getLogHistory();
  res.status(200).json(data);
})
app.post('/order', (req, res) => {
  ordersController.addOrder(req.body.desc);
  res.status(200).json(req.body.desc);
})
app.delete('/order/:order_id', (req, res) => {
  let { desc } = ordersController.removeOrder(req.params.order_id);
  res.status(200).json(desc);
})
app.delete('/orders', (req, res) => {
  ordersController.removeAllOrders();
  res.status(200);
})

app.listen(port, () => console.log(`server is running on port ${port}`));