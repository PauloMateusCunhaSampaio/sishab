var { Client } = require("pg");
const databaseConnectionInfo = {
    host: 'database-pw.cox34sypgf3r.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'databasePW',
    user: 'userpw',
    password: 'password',
}
const databaseClient = new Client(databaseConnectionInfo);

/**
 * Initiates database connection. Needs to be start at the beginning of the application
 */
async function connectDatabase() {
    await databaseClient.connect();
}

/**
 * Drop database connection. Needs to be called by the end of the application
 */
async function dropDatabase() {
    databaseClient.end();
}

/**
 * Send query to database
 * @param {string} query query to be made to the database
 * @returns {Object[]} Array of objects returned from the database
 */
async function sendQuery(query) {
    return (await databaseClient.query(query)).rows;
}

module.exports = {
    connectDatabase,
    dropDatabase,
    sendQuery
}
