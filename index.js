const express = require ('express');
const app = express();
const shelterRoutes = require ('./routes/shelters')
const dogsRoutes = require ('./routes/dogs')
const catsRoutes = require ('./routes/cats')
const adminRoutes = require ('./routes/admin')


app.use('/shelters', shelterRoutes)
app.use('/dogs', dogsRoutes)
app.use('/cats', catsRoutes)
app.use('/admin', adminRoutes)

app.listen(5000, () => {
    console.log('Serving App on Localhost:3000')
})