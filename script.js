// Definição dos objetos de produtos
const produtos = [
    { id: 1, nome: 'Smartphone', preco: 1000 },
    { id: 2, nome: 'Notebook', preco: 1500 },
    { id: 3, nome: 'Fone de Ouvido', preco: 100 },
    { id: 4, nome: 'Tablet', preco: 600 },
];

// Carrinho de compras
const carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(item => item.id === id);
    if (produto) {
        carrinho.push(produto);
        console.log(`Produto "${produto.nome}" adicionado ao carrinho.`);
    } else {
        console.log('Produto não encontrado.');
    }
}

// Função para listar produtos no carrinho
function listarCarrinho() {
    if (carrinho.length === 0) {
        console.log('O carrinho está vazio.');
    } else {
        console.log('Produtos no carrinho:');
        carrinho.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco}`);
        });
    }
}

// Adicionar produtos ao carrinho
adicionarAoCarrinho(1);
adicionarAoCarrinho(3);

// Listar produtos no carrinho
listarCarrinho();