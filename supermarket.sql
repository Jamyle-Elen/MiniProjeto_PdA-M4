CREATE DATABASE items;

USE items;

SELECT * FROM supermarket.items;

CREATE TABLE items (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    manufacturing_date DATETIME NOT NULL,
    expiry_date DATETIME NOT NULL,
    category VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO items (id, name, price, manufacturing_date, expiry_date, category, quantity) VALUES
('e77c9e3c-3b4e-4a37-bc5b-6e5d6d3b7df8', 'Pão', 5.20, '1899-11-30T02:34:00.000Z', '1899-11-30T02:34:00.000Z', 'Padaria', 25),
('f1a46b2d-229e-45e7-9b47-f78c14bfc5a2', 'Leite', 3.50, '2024-06-07T03:00:00.000Z', '2024-07-22T03:00:00.000Z', 'Laticínios', 100),
('c3a639f8-dbe4-4d0f-a8c0-8d0d2261bb8a', 'Arroz', 10.99, '2024-01-15T03:00:00.000Z', '2025-01-15T03:00:00.000Z', 'Grãos', 50),
('4d24f7be-95b8-4c58-944a-0f2a3d7d8e9b', 'Feijão', 7.80, '2024-02-20T03:00:00.000Z', '2025-02-20T03:00:00.000Z', 'Grãos', 30),
('b7a1c748-9e45-4392-8c85-2b3d2d9e0f7f', 'Macarrão', 6.40, '2024-03-25T03:00:00.000Z', '2025-03-25T03:00:00.000Z', 'Massas', 40),
('11b2a8f6-8cbe-4bfc-bfd7-8d057b7d8e89', 'Óleo', 8.99, '2024-04-10T03:00:00.000Z', '2025-04-10T03:00:00.000Z', 'Óleos e Gorduras', 20),
('c1d3b6f4-2d9e-4f6b-b7f7-8c27c0ea8b8e', 'Açúcar', 4.90, '2024-05-05T03:00:00.000Z', '2025-05-05T03:00:00.000Z', 'Açúcares', 60),
('b4e2f6a2-8b39-4c77-9d68-8b7350c6a8a5', 'Café', 12.00, '2024-06-01T03:00:00.000Z', '2025-06-01T03:00:00.000Z', 'Bebidas', 15),
('e4f1b3c8-7e1d-4a1c-8b71-4c845a7d5b6c', 'Maionese', 5.50, '2024-07-15T03:00:00.000Z', '2025-07-15T03:00:00.000Z', 'Condimentos', 25),
('8f56a9d5-2456-4a1f-9b9b-74d4e7dfc7b9', 'Sardinha', 9.40, '2024-08-20T03:00:00.000Z', '2025-08-20T03:00:00.000Z', 'Conservas', 12),
('9c2a5e3a-df8e-4c32-9d4f-c6a69a19d8a1', 'Queijo', 15.50, '2024-09-01T03:00:00.000Z', '2025-09-01T03:00:00.000Z', 'Laticínios', 10),
('1d6e6d3a-c5e4-4c3b-a65c-2b1b7b4e8e5e', 'Sushi', 1.99, '2024-07-10T03:00:00.000Z', '2024-07-23T03:00:00.000Z', 'Frios', 5),
('2b7c8d5e-4f6a-4c77-b9e1-2d7c4b2e1f3d', 'Salmão', 1.99, '2024-07-10T03:00:00.000Z', '2024-07-23T03:00:00.000Z', 'Frios', 10),
('3a8c9d7e-2e4d-4b1f-8d1b-3e7b5c6d2f4e', 'Lombo', 1.99, '2024-07-10T03:00:00.000Z', '2024-07-23T03:00:00.000Z', 'Carnes', 15);
