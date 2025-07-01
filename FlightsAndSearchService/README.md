# Welcome to JetSetGo - Flight Services

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of the root directory of the cloned project
- Create a `.env` file in the root directory of the project and add the following environment variables
          - `PORT=3000`
- Inside the`src/config` folder create a file named `config.json` and then add the following piece of code:

```
{
"development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "YOUR_DB_PASSWORD",
    "database": "flights_search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added the db config as listed above, go to the src folder from your terminal and execute `npx sequealize db:create`

## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but an airplane can be used in multiple flights
  - A city can have many airports but an airport can only belong to one city
  - One airport can have many flights but a flight belongs to only one airport

  ## Tables

  ### City -> id, name, created_at, updated_at
  ### Airport -> id, name, address, city_id, created_at, updated_at
         Relationship: A City has many Airports and an Airport belongs to a City (ONE to MANY)

```
npx sequelize model:generate --name City --attributes name:String
```
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```
```
npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer
```
```
npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer
```