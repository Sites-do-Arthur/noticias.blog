function calculadora()
var n1;
var n2;
var menu;
document.writeln("CALCULADORA INTERATIVA v-web(beta)");
menu = prompt("[1] para subtração, [2] para multiplicação ou [3] para divisão (OBS: A calculadora interativa verção web esta em desenvolvimento!)");
n1 = prompt("Digite o primeiro valor");
n2 = prompt("Digite o segundo valor");
if(menu == 1) {
    document.write("O resultado é ");
    document.write(n1 - n2);
}
if(menu == 2) {
    document.write("O resultado é ");
    document.write(n1 * n2);
}