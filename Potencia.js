// Faça uma função que calcule a potencia
// a partir de 2 parâmetros.


function potencia(n , p){
   let mult = n;
   for(let i = 1; i <= p-1; i++){
      mult = mult * n;
   }
   console.log(mult);
}
potencia(2,5);

