const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connection successful');
    }).catch((err) => {
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: {
        type: [String],
    },
    qty: {
        online: {
            type: Number,
        },
        inStore: {
            type: Number,
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.toggleSale = function () {
    this.onSale = !this.onSale;
    this.save();
}

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 699 })

bike.save()
    .then(data => {
        console.log(data);
    }).catch(e => {
        console.log(e);
    })