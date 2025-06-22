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