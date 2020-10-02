const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    cname: {
        type:String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters']
    },
    stars: {
        type: Number,
        required: [true, 'Star rating is required'],
        min: [1, 'Star rating must at least be 1'],
        max: [5, 'Star rating can only be up to 5']
    },
    review: {
        type:String,
        required: [true, 'Review is required'],
        minlength: [3, 'Review must be at least 3 characters']
    }
    }, {timestamps: true})

const Review = new mongoose.model('Review',ReviewSchema)

module.exports={
    Review:Review,
    ReviewSchema:ReviewSchema
}