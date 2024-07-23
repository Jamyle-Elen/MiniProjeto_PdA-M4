import express from 'express'
import { getAllItems, getItemByCategory, getItemById, getPromotionalItems,createItem, updateItem, deleteItem } from '../controllers/itemController.js'

const router = express.Router();

router.get('/items', getAllItems)
router.get('/items/category', getItemByCategory)
router.get('/items/:id', getItemById);
router.get('/items/promotional', getPromotionalItems);
router.post('/items', createItem);
router.put('/items:id', updateItem)
router.delete('/items:id', deleteItem);

export default router;
