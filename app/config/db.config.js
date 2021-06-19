/* Für lokale XAMPP Datenbank
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "hoteldb",
 dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
*/

// Verbindung zu Azure Cloud Datenbank
module.exports = {
    HOST: "hotel-trip-service-server.mariadb.database.azure.com",
    USER: "RonaldMoritz@hotel-trip-service-server",
    PASSWORD: "KCa75dYdDpSKrM",
    DB: "hoteldb",
    dialect: "mariadb",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};