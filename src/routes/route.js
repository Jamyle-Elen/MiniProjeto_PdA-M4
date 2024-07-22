
import express from 'express'
import { getAllItems, getItemById, getItemByCategory, createItem, updateItem, deleteItem } from '../controllers/itemController.js'

const router = express.Router();

router.get('/items', getAllItems)
router.get('/items/category', getItemByCategory)
router.get('/items/:id', getItemById);
router.post('/items', createItem);
router.put('/items:id', updateItem)
router.delete('/items:id', deleteItem);

export default router;
