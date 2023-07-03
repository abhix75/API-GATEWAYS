const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const rateLimit = require('express-rate-limit')
const {createProxyMiddleware}=require('http-proxy-middleware')
// const{User,Role}=require('./models')

const app = express();
const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	max: 3, // Limit each IP to 3 requests per `window` (here, per 2 minutes)

})
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.use('/flightsService', createProxyMiddleware({ target:ServerConfig.Flight_Service, changeOrigin: true }));
app.use('/bookingService',createProxyMiddleware({ target:ServerConfig.booking_Service, changeOrigin: true }));
app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
	// const user = await User.findByPk(5);
	// const role = await Role.findByPk(1);
	// await user.addRole(role);
	// console.log(role,user);
});
