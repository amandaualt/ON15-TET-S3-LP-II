let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

    function desconto(valor) {
        if (valor > 50 && valor < 80) {
          // 5%
          return valor * 0.95;
        } else if (valor >= 80 && valor < 100) {
          // 10%
          return valor * 0.90;
        } else if (valor >= 100 && valor < 200) {
          // 20%
          return valor * 0.80;
        } else if (valor >= 200) {
          // 50%
          return valor * 0.50;
        }
        return valor;
      }
      
      function cupom(valorFinal, totalItens) {
        if (valorFinal > 800 || totalItens > 10) {
          return 50;
        }
        return 0;
      }
      
      function carrinhoDeCompra(compra) {
        let valorTotal = 0;
        let valorFinal = 0;
        const totalItens = compra.length;
      
        for (let i = 0; i < totalItens; i++) {
          const { valor } = compra[i];
          valorTotal += valor;
          valorFinal += desconto(valor);
        }
      
      
        return {
          valorFinal,
          valorTotal,
          desconto: valorTotal - valorFinal,
          cupom: cupom(valorFinal, totalItens),
          horaCompra: (new Date()).toISOString()
        };
      }
      
      function fazerCompras(clientes) {
        for (const cliente of clientes) {
          console.log(carrinhoDeCompra(cliente));
        }
      }
      
      fazerCompras([clienteLilit]);