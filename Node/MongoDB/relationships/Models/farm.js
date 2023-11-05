const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('Connection successful');
    }).catch((err) => {
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})
const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const Farm = mongoose.model('Farm', farmSchema);
const Product = mongoose.model('Product', productSchema);

// Product.insertMany([
//     { name: 'Melon A', price: 4.99, season: 'Summer' },
//     { name: 'Melon B', price: 8.99, season: 'Summer' },
//     { name: 'Cucumber', price: 1.99, season: 'Fall' }
// ])

const makeFarm = async () => {
    const farm = new Farm({ name: 'xyz', city: 'Toronto' });
    const melon = await Product.findOne({ name: 'Melon A' });
    farm.products.push(melon);
    farm.save();
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'xyz' });
    const melon = await Product.findOne({ name: 'Melon B' });
    farm.products.push(melon);
    await farm.save();
}
// addProduct();

// makeFarm();
Farm.findOne({ name: 'xyz' })
    .populate('products')
    .then(farm => console.log(farm))