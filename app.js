require('dotenv').config();
let express = require('express');
let app = express();

let sequelize = require('./db');

let user = require('./controllers/user-controller');
let product = require('./controllers/product-controller');
let userinfo = require('./controllers/userinfo-controller');


// app.use('/test', function(req, res){
//     res.send('This is the test endpoint breaking through to the server')
// })

app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user)
app.use('/product', product)
app.use('/userinfo', userinfo)


sequelize.sync();
// sequelize.sync({force: true})
// app.listen(process.env.PORT, () => {
//     console.log(`Woodstock on port ${process.env.PORT}`)
// })

app.listen(3000, function(){

    console.log("App is listening on port 3000");
});