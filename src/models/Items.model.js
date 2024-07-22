// lembrar de sempre usar o 'v4' (que é o que gera esse tipo de id com 36 caracteres)
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

// "Model é onde fica o modelo de como vai ser o item, criando e instanciando classes"
export default Item;
