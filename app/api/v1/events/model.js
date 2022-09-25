const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let eventSchema = Schema(
    {
        title:{
            type:String,
            minLenght:[3,'Minimum length is 3 characters'],
            maxLenght:[20,'Maximum length is 20 characters'],
            required:[true,'Input cannot be empty'],
        },
        date:{
            type:Date,
            required:[true,'Tanggal event harus diisi']
        },
        about:{
            type:String,
            minLenght:[3,'Minimum length is 3 characters'],
            maxLenght:[20,'Maximum length is 20 characters'],
            required:[true,'Input cannot be empty'],
        },
        tagline:{
            type:String,
            minLenght:[3,'Minimum length is 3 characters'],
            maxLenght:[20,'Maximum length is 20 characters'],
            required:[true,'Input cannot be empty'],
        },
        keypoint:{
            type:String,
            minLenght:[3,'Minimum length is 3 characters'],
            maxLenght:[100,'Maximum length is 100 characters'],
            required:[true,'Input cannot be empty'],
        },
        vanue_name:{
            type:String,
            minLenght:[3,'Minimum length is 3 characters'],
            maxLenght:[100,'Maximum length is 100 characters'],
            required:[true,'Input cannot be empty'],
        },
        status:{
            type:Enumerator,
            minLenght:[3,'Minimum length is 3 characters'],
            maxLenght:[20,'Maximum length is 20 characters'],
            required:[true,'Input cannot be empty'],
        },
        categories_id:{
            type:String,
            required:[true,'Categoris cannot be empty'],
        },
        images_id:{
            type:String,
            required:[true,'Images cannot be empty'],
        },
        talent_id:{
            type:String,
            required:[true,'Talent cannot be empty'],
        },
        organizer_id:{
            type:String,
            required:[true,'Images cannot be empty'],
        },


    },
    {timestamps:true}
);

module.exports = model("Events",eventSchema);