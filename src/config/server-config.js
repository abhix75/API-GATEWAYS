const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT_ROUND:process.env.SALT_ROUND,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRY:process.env.JWT_EXPIRY,
    Flight_Service:process.env.Flight_Service,
    booking_Service:process.env.booking_Service
}