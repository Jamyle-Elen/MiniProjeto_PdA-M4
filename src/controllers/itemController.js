
import mysql from "mysql2";
import connection from "../config/database.js";
import Item from "../models/Items.model.js";

// criaçoa do item
export const createItem = (req, res) => {
  const { name, price, manufacturing_date, expiry_date, category, quantity } =
    req.body;

    // verificar
    if (!name || !price || !manufacturing_date || !expiry_date || !category || !quantity) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

    const newItem = new Item (
        name,
        price,
        manufacturing_date,
        expiry_date,
        category,
        quantity
    );
   
    const sql = "INSERT INTO items SET ?";
// conexao com o sql
  connection.query(sql, newItem, (err, results) => {
    if (err) {
      console.log("Erro ao inserir o item", err)
      return res.status(500).json({ error: "Erro ao inserir o item" });
    }
    res.status(201).json({ message: 'Item adicionado com sucesso', item: newItem });
  })
}

export const getAllItems = (req, res) => {
    const sql = 'SELECT * FROM items';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao inserir item', err);
            return res.status(500).json({ error: 'Erro ao inserir item' })
        }
        res.status(200).json(results);
    })
}

// pegar item usando o ID

export const getItemById = (req, res) => {
    const { id } = req.params
    // diferença de params e body
    const sql = 'SELECT * FROM items WHERE id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Erro ao pegar item', err);
            return res.status(500).json({ error: 'Erro ao pegar item' })
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Item não encontrado' })
        }
        res.status(200).json(results[0]);
    })
}

// pegar itens pela categoria
export const getItemByCategory = (req, res) => {
    const { category } = req.query
    const sql = 'SELECT * FROM items WHERE category = ?'

    connection.query(sql, [category], (err, results) => {
        if (err) {
            console.error('Erro ao pegar item', err);
            return res.status(500).json({ error: 'Erro ao pegar item' })
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Item não encontrado' })
        }
        res.status(200).json(results);
    })
}

// atualizar item (put) então vai ser atualizar o item por completo
export const updateItem = (req, res) => {
    const { id } = req.params;
    const { name, price, manufacturing_date, expiry_date, category, quantity } = req.body;

    const sql = 'UPDATE items SET name = ?, price = ?, manufacturing_date = ?, expiry_date = ?, category = ?, quantity = ? '

    connection.query(sql, [name, price, manufacturing_date, expiry_date, category, quantity, id], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar item', err);
            return res.status(500).json({ error: 'Erro ao atualizar item' })
        }
        // affectedRows é utilizado pra mostrar quantas linhas foram alteradas
        if (results.affectedRows === 0) {
            console.error('Item não encontradop')
        }
        res.status(200).json({ message: 'Item atualizado!' })
    })
}

// deeletar item
export const deleteItem = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM items WHERE id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Erro ao deletar item', err)
            return res.status(500).json({ error: 'Erro ao deletar item' })
        }
        if (results.affectedRows === 0) {
            console.error('Item não encontrado')
        }
        res.status(200).json({ message: 'Item deletado com sucesso' })
    })
}
