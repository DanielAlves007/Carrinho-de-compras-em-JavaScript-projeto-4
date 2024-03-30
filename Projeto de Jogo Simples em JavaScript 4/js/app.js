let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$';

function adicionar(){

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if(quantidade==0){
        alert('Atenção, quantidade não definida!');
    };
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
      <span class="texto-azul"> ${quantidade} </span>${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span>
    </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    
}

function limpar(){
     totalGeral = 0;
     limparCarrinho = document.getElementById('lista-produtos').innerHTML = '';
     limparTotal = document.getElementById('valor-total').textContent = 'R$';
}