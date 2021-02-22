# virtual-vendor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running virtual-vendor

In the virtual-vendor directory, you can run:

### `npm start`

Runs the client side of virtual-vendor in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

In the backend directory, you can run:

### `nodemon server.js`

Runs the server side of virtual-vendor which hosts the API\
and interacts with the MongoDB database via mongoose. Runs\
locally on port 5000.

## Using virtual-vendor

Once the client side of virtual-vendor is running, navigate to\
[http://localhost:3000](http://localhost:3000) in your browser.\
You should see the vending machine, and now you're ready to buy\
sodas. Click the buy button next to the soda that you want. A\
JSON file containing your virtual soda will begin downloading. Once\
your virtual soda has downloaded, enjoy!

## Admin API Use Instructions

### `GET Request Routes`

`/`: Returns entire collection of sodas

`/:id`: Returns soda specified by its id in the database

### `POST Request Routes`

`/add`: Creates a new soda and stores it in the database.\
Format the data that you would like to store in the JSON format\
and send the data in the body of the POST request.
Example: {'name': 'NiceSoda', 'description': tasty, 'price': 1, quantity: 10}

`/buy/:id`: Used by the client side of virtual-vendor.\
Decrements quantity of soda specified by id in the database.\

`update/:id`: Updates the soda specified by id. Format updated\
data in the same way described in `/add`.

### `DELETE Request Routes`

`delete/:id`: Deletes the soda specified by id in the database.