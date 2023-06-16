const express = require('express');
const {Auth}=require('./utils/common')
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoia2lybnJpQGdtYWlsLmNvbSIsImlhdCI6MTY4NjkyMTA5NCwiZXhwIjoxNjg2OTI0Njk0fQ.xBc2qD7EOae4P3VT0eAwI4cSa8N0PYgefwyb0XagkO4"
    const response = Auth.verifyToken(token);
    console.log(response);
});
