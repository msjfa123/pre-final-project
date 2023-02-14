const express = require("express");
const bodyparser = require("body-parser");
const jalaali = require("jalaali-js");


const jwt = require('jsonwebtoken');
require('dotenv').config()


const app = express();


app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/member',require('./router/member'))
app.use('/createToken',require('./router/createToken'))
app.use('/show',require('./router/showAll'))
app.use('/changeRole',require('./router/changeRole'))
app.use('/deleteMember',require('./router/deleteMember'))
app.use('/bookType',require('./router/bookType'))
app.use('/bookDetails',require('./router/bookDetails'))
app.use('/DetaAndType',require('./router/DetaAndType'))
app.use('/showDetails',require('./router/showDetails'))
app.use('/cart',require('./router/cart'))
app.use('/showCart',require('./router/showCart'))
app.use('/budget',require('./router/budget'))
app.use('/pay',require('./router/pay'))
app.use('/discount',require('./router/discount'))
app.use('/payByDiscount',require('./router/payByDiscount'))


















app.listen(4001);
