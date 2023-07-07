const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    plate: {
        type: String,
        unique: true,
        required: [true, "Please enter the vehicle's license plate."]
    },
    year: {
        type: Number,
        min: 2010,
        required: [true, "Please enter the vehicle's model year."]
    },
    brand: {
        type: String,
        required: [true, "Please enter the vehicle's brand."]
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: {createdAt: 'creationDate', updatedAt: 'lastUpdate'}
});

const Car = model('Car', carSchema);
module.exports = Car;