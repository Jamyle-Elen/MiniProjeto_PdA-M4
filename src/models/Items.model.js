import { v4 as uuidv4 } from 'uuid'
class Item {
    constructor(name, price, manufacturing_date, expiry_date, category, quantity) {
        this.id = uuidv4()
        this.name = name;
        this.price = price;
        this.manufacturing_date = manufacturing_date;
        this.expiry_date = expiry_date;
        this.category = category;
        this.quantity = quantity;
    }
}

export default Item;
