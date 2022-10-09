### :shopping_cart: Ecommerce Website [React & Node & MongoDB]

# eCommerce

**eCommerce**, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet.

## :white_check_mark: Features Check List

### Users Features

| Feature           |  Coded?  | Description                           |
| ----------------- | :------: | :------------------------------------ |
| Sign In           | &#10004; | Ability of Sign In to your Account    |
| Sign Out          | &#10004; | Ability of Sign Out from your Account |
| Create an Account | &#10004; | Ability of Creating an User Account   |
| Order History     | &#10004; | Ability to View your Order History    |
| Order Summary     | &#10004; | Ability to View your Order Summary    |

### Admin Features

| Feature          |  Coded?  | Description                             |
| ---------------- | :------: | :-------------------------------------- |
| Dashboard        | &#10004; | Ability of Review Sales Statistics      |
| Create a Product | &#10004; | Ability of Add a Product on DB          |
| Edit a Product   | &#10004; | Ability of Edit a Product from DB       |
| Delete a Product | &#10004; | Ability of Delete a Product from DB     |
| Delete an Order  | &#10004; | Ability of Delete an Order              |
| Delivery         | &#10004; | Ability of Edit an Order as "Delivered" |

### Purchase Features

| Feature        |  Coded?  | Description                                  |
| -------------- | :------: | :------------------------------------------- |
| See Cart       | &#10004; | Ability to see the Cart and it items         |
| Add Item       | &#10004; | Ability of add a new Item on the Cart        |
| Remove a Item  | &#10004; | Ability of Remove a Item from the Cart       |
| Search an Item | &#10004; | Ability of search an Item and filter results |
| Checkout       | &#10004; | Ability to Checkout                          |
| Payment        | &#10004; | Ability to Pay with PayPal Developer Sandbox |

# Sections:

1. Create React App
2. Create Git Repository and README file
3. Products
   - Create products array
   - Add product images
   - Render products
   - Style products
4. Add Routing
   - npm i react-router-dom
   - create router for home screen
   - create router for product screen
5. Create Node.JS Server
   - npm init in root folder
   - Update package.json set type: module
   - Add .jd to imports
   - npm install express
   - create server.js
   - add start command as node backend/server.js
   - require express
   - create route for / return backend is ready
   - move products.js from frontend to backend
   - create route for /api/products
6. Fetch Products From Backend
   - set proxy in package.json
   - npm install axios
   - use state hook
   - use effect hook
   - use reducer hook
7. Manage State By Reducer Hook
   - update fetch data
8. Add Bootstrap
   - npm install react-bootstrap
9. Create Product Component
   - create Rating component
   - create Product component
   - Use Rating component in Product component
10. Create Product Details Screen
    - fetch product from backend
    - create 3 columns for image, info and action
11. Create Loading and Message Component
    - create loading component
    - use spinner component
    - create message component
    - create utils.js to define getError function
12. Implement Add To Cart
    - create React Context
    - define reducer
    - create store provider
    - implement add to cart button click handler
13. Complete Add To Cart
    - check exist item in the cart
    - check count in stock in backend
14. Create Cart Screen
    - create 2 columns
    - display items list
    - create action column
15. Complete Cart Screen
    - click handler for inc/dec item
    - click handler for remove item
    - click handler for checkout
16. Create Signin Screen
    - create signin form
17. Connect To MongoDB Database
    - create atlas mongodb database
18. Seed Sample Data
    - create Product model
    - create User model
    - create seed route
    - use route in server.js
    - seed sample product
19. Seed Sample Users
    - create user model
    - seed sample users
    - create user routes
20. Create Signin backend API
    - create signin api
    - npm install jsonwebtoken
    - define generateToken
21. Complete Signin Screen
    - handle submit action
    - save token in store
    - show user name in header
22. Create Shipping Screen
    - create form inputs
    - handle save shipping address
    - add checkout wizard bar
23. Create Sign Up Screen
    - create input forms
    - handle submit
    - create backend api
24. Implement Select Payment Method Screen
    - create input forms
    - handle submit
25. Create Place Order Screen
    - show cart items, payment and address
    - calculate order summary
26. Implement Place Order Action
    - handle place order action
    - create order create api
27. Create Order Screen
    - create backend api for order/:id
    - fetch order api in frontend
    - show order information in 2 cloumns
28. Pay Order By PayPal
    - generate paypal client id
    - create api to return client id
    - install react-paypal-js
    - implement loadPaypalScript function
    - render paypal button
    - implement onApprove payment function
    - create pay order api in backend
29. Display Order History
    - create order screen
    - create order history api
    - use api in the frontend
30. Create Profile Screen
    - show user information
    - create user update api
    - update user info
31. Publish To Heroku
    - create and config node project
    - serve build folder in frontend folder
    - Create heroku account
    - Create mongodb atlas database
    - Set database connection in heroku env variables
32. Sidebar and Search Box
    - sidebar
    - search box
33. Create Search Screen
    - filters
    - api for searching products
    - display results
34. Admin Menu
    - protected route component
    - admin route component
    - menu for admin in header
35. Dashboard Screen
    - dashboard ui
    - backend api
    - connect ui to backend
