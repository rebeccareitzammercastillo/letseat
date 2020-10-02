const { Restaurant } = require("../models/restaurant")
const {Review} = require("../models/review")

module.exports = {
    index: function(req,res){
        Restaurant.find()
        .then((data) => {
            console.log("Index/all from Controller")
            res.json({restaurants:data});
        })
        .catch((err) => {
            res.json(err);
        });
    },
    
    show: function (req, res){
        Restaurant.findOne({_id: req.params.id})
        .then(data => {
            console.log("Show from Controller")
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
        // res.json({status:'success', name:req.params.name})
    },
    
    create: function (req,res){
        let restaurant = new Restaurant()
        restaurant.name= req.body.name
        restaurant.cuisine= req.body.cuisine
        restaurant.save()
        .then(newRestaurant => {
            console.log("Create from Controller")
            res.json(newRestaurant);
        })
        .catch((err)=>{
            res.json(err);
        });
    },
    
    edit: function (req,res){
        Restaurant.findOne({_id:req.params.id})
        .then(data => {
            restaurant = data
            restaurant.name = req.body.name
            restaurant.cuisine = req.body.cuisine
            restaurant.save()
            .then(()=>{
                console.log("Edit from controller")
                res.json(data)
            })
            .catch((err)=>{
                res.json(err)
            })
        })
        .catch(err => {
            console.log("******************controller")
            res.json(err)
        })
        
    },
    
    delete: function (req,res){
        Restaurant.deleteOne({_id: req.params.id})
        .then(() => {
            res.json(`You have deleted from controller`);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    createReviews: function(req,res){
        let review = new Review()
        console.log("**************controller1**********")
        review.cname= req.body.cname
        review.stars= req.body.stars
        review.review= req.body.review
        review.save()
        .then(review => {
            console.log("**************controller2**********")
            Restaurant.update({_id: req.params.id},{$push:{reviews:review}})
                .then(data => res.json(data))
                .catch(err=> res.json(err))
        })
        .catch((err)=>{
            res.json(err);
        });
    }
}