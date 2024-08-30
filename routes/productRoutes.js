import express from 'express';
import { createProduct, listProducts } from '../controllers/productController.js';
import { protect } from '../middlewares/authMiddleware.js'; // Middleware for protecting routes

const router = express.Router();

router.post('/', protect, createProduct);
router.get('/', listProducts);

export default router;
