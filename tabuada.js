const numero = prompt(
    'Robô da tabuada, informe o número a ser calculado:')
    
let resultado = ''

for (let i = 1; i <=10; i++) {
    resultado += "-->" + numero + ' * ' + i + ' = '
+(numero * i) + "\n"}

alert('Resultado da tabuada de ' + numero + ':\n\n' + resultado)
