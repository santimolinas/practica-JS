const posicionInicial = Math.floor(Math.random() * 360);
const vueltas = Math.floor(Math.random() * 6) + 5;

const anguloFinal = (posicionInicial + vueltas * 360) % 360;

console.log(`Posición o ángulo Inicial G.A.: ${posicionInicial} grados`);
console.log(`Valor Aleatorio Generado en Grados: ${vueltas * 360} grados`);
console.log(`Ángulo Final: ${anguloFinal} grados`);