const { ReviewSchema } = require("../models/review")
const mongoose =require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Restaurant name is required'], 
        minlength: [3, 'Restaurant name must be at least 3 characters'],
        unique: [true, 'Restaurant name has already been taken']
    },
    cuisine: {
        type:String,
        required: [true, 'Cuisine is required'],
        minlength: [3, 'Cuisine must be at least 3 characters']
    },
    reviews: [ReviewSchema]
}, {timestamps:true})

const Restaurant = new mongoose.model('Restaurant', RestaurantSchema)

module.exports={
    Restaurant:Restaurant,
    RestaurantSchema:RestaurantSchema
}