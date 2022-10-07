# ONLINE-SHOP

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
