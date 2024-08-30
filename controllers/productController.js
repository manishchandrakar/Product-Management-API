import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const { name, uniqueId, image, description } = req.body;
    const userId = req.user.userId;  // Assuming `req.user` is populated by middleware

    try {
        const newProduct = new Product({
            name, uniqueId, image, description, user: userId
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const listProducts = async (req, res) => {
    const { sortBy } = req.query; // `sortBy` can be 'name' or 'date'

    try {
        let products = await Product.find().populate('user', 'name email');
        
        if (sortBy === 'name') {
            products = products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'date') {
            products = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
