# Resturant orders - CRUD api 🍽 
***
###This is a basic CRUD api that manage orders in resturant
---

* List of all the restaurant history

  * **Method**: GET 
  * **URL**: http://localhost:8080/
* List of all the orders
  * **Method**: GET 
  * **URL**: http://localhost:8080/orders
* List single order
  * **Method**: GET
  * **URL**: http://localhost:8080/order/order_id=[integer]
* Add single order
  * **Method**:POST 
  * **URL**:http://localhost:8080/order
  * **Data Params**: {desc: 'what you want'}
* Remeove all orders
  * **Method**: DELETE
  * **URL**: http://localhost:8080/orders
* Remove single order
  * **Method**: DELETE     
  * **URL**:http://localhost:8080/order/order_id=[integer]
