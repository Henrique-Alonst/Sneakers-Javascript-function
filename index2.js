function nike(){
   res.innerHTML = `
   Air Force <br>
   <img src="img/airforce.jpg" width="250" height="200">
   <br> R$799
   <br><input type="button" value="comprar" onclick="comprar()">
   `
   
}

function adidas(){
   res.innerHTML = `
    Microbounce <br>
    <img src="img/bounce.jpeg" width="250" height="200">
    <br> R$1399
    <br>
    <input type="button" value="comprar" onclick= "comprar()">`;
   
}

function puma(){
   res.innerHTML = `
    Puma Suede<br>
    <img src="img/puma.png" width="250" height="200">
    <br> R$500
    <br>
    <input type="button" value="comprar" onclick= "comprar()">`;
   
}

function comprar(produto, preco) {
   
   window.location.href = `checkout.html?produto=${encodeURIComponent(produto)}&preco=${preco}`;
 }