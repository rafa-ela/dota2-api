/**********
* index.js file (for routes)
**********/

const apiRoute = require('./api'); //load the api folder

/****
*  We call this from the app.js file to pass all the routes of the application to this
*  and then return the next callback function. 
*/
const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', apiRoute);
}


module.exports = {
    init: init
};