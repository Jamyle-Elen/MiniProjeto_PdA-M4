# Supermarket Inventory Management System

## Problematização

Diariamente acontece inúmeras quantidades de desperdício de alimento, este sistema visa diminuir estas quantidades oferecendo desconto à aqueles itens que estão próximos de vencer.

Todo o dia é feito uma inspeção para verificar a qualidade dos itens, ela é realizada às 00:00. Produtos que estiverem faltando 15 dias para seu vencimento, seu preço será automaticamente alterado para `1.99`. Como supermercados não podem vender produtos vencidos, é oferecido um super desconto nestes itens para evitar sua perda.

## Descrição

Este é um sistema de gerenciamento de inventário para um supermercado. Ele permite a adição, visualização, atualização e exclusão de itens no estoque. O sistema é construído utilizando Node.js com Express e MySQL para o backend.

## Funcionalidades

- `Criar Item:` Adiciona um novo item ao estoque.
- `Obter Todos os Itens:` Recupera todos os itens do estoque.
- `Obter Item por ID:` Recupera um item específico pelo seu ID.
- `Obter Itens em Promoção:` Recupera itens listados em promoção.
- `Obter Itens por Categoria:` Recupera itens com base na categoria fornecida.
- `Atualizar Item:` Atualiza as informações de um item existente.
- `Deletar Item:` Remove um item do estoque.

## Configuração

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instale as Dependências**

    ```bash
    npm install
    ```

3. **Configure o Banco de Dados**

    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```env
    DB_HOST=localhost
    DB_USER=seu-usuario
    DB_PASSWORD=sua-senha
    DB_DATABASE=supermarket
    ```

    Importe o arquivo SQL `database.sql` no seu banco de dados MySQL para criar a tabela e adicionar dados iniciais.

4. **Inicie o Servidor**

    ```bash
    npm start
    ```

## Contribuição

Sinta-se à vontade para contribuir para este projeto! Crie um pull request ou envie um e-mail para discutir possíveis melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
