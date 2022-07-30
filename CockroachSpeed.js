// The cockroach is one of the fastest insects. 
// Write a function which takes its speed in km per hour 
// and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent)
// and is >= 0. The result should be an Integer.

// ====================================================

// Retornar o velocidade em cm por segundo em inteiro arredondado para baixo

// entrada numero real >= 0
// saida inteiro

function cockroachSpeed(speed) {
    let secondPerHour = 3600;
    let cmPerSecond = Math.floor(speed / secondPerHour * 100000);
    return Number(cmPerSecond.toFixed());  
  }

console.log(cockroachSpeed(1.08));

// =================================================

// Melhor solução encontrada
const cockroachSpeed = s => Math.floor(s / 0.036);
