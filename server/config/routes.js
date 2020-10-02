const Restaurants = require('../controllers/restaurants')
const path = require('path');

module.exports = function (app) {
    app.get ('/', (req,res)=>{
    })

    app.get ('/restaurants', (req,res)=>{
        console.log("index/all from routes")
        Restaurants.index(req,res)
    })

    app.get('/restaurants/:id', (req,res)=>{
        console.log("show from routes")
        Restaurants.show(req,res)
    })

    app.post('/restaurants', (req,res)=>{
        console.log("create from routes")
        Restaurants.create(req,res)
    })

    app.post('/restaurants/:id/edit', (req,res)=>{
        console.log("*******************routes")
        console.log("edit from routes")
        Restaurants.edit(req,res)
    })

    app.delete('/restaurants/:id/delete', (req,res)=>{
        console.log("delete from routes")
        Restaurants.delete(req,res)
    })
    
    app.post('/restaurants/:id/reviews', (req,res)=>{
        Restaurants.createReviews(req,res)
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}