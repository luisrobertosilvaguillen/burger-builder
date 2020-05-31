This is a Demo Project based in the Udemy Course: [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

[Live Demo Here](https://react-mi-hamburguesa.web.app)

## Intructions to run this Project

In order to configure and run this proyect you must follow the next steps

### `install packages`

You must download/clone this repo and run `npm install` 

### `configure firebase`

This project use firebase to store data.
Go to [Firebase](https://firebase.google.com/?hl=es) to create a New Project with a Realtime Database.

Configure the Database Rules with:

    {
        "rules": {
            "ingredients": {
            ".read": "true",
                ".write": "true",
            },
            "orders": {
            ".read": "auth != null",
            ".write": "auth != null",
            ".indexOn": ["userId"]
            }
        }
    }


Import this Json which are the Ingredients for the Burger

    {
        "-M7-YnO2YbMNfI6xvdbB" : {
            "id" : 1,
            "name" : "Bacon",
            "price" : 0.7,
            "quantity" : 0,
            "type" : "bacon"
        },
        "-M7-YrfXs_qYNNJbDsKs" : {
            "id" : 1,
            "name" : "Cheese",
            "price" : 0.4,
            "quantity" : 0,
            "type" : "cheese"
        },
        "-M7-Yv736cGzI6SNI8El" : {
            "id" : 1,
            "name" : "Meat",
            "price" : 1.3,
            "quantity" : 0,
            "type" : "meat"
        },
        "-M7-Yyao8o5qYgS7mbmz" : {
            "id" : 1,
            "name" : "Salad",
            "price" : 0.5,
            "quantity" : 0,
            "type" : "salad"
        }
    }


Once you have configured your project, you should copy the API ENDPOINT and the API KEY and paste in the follwing files:

    Paste the API ENDPOINT in ./src/axios-orders.js
    Paste the API KEY in ./src/const.js

If you want to ask something about this project, you can send me a email at luis.roberto.silva.guillen@gmail.com
