function media(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = (parseInt(val1) + parseInt(val2)) / 2;
    alert(result);
    
    if(result == 10)
    alert('Boa mulekote')
    if(result == 0)
    alert('BMDS...')
    if(result >= 6)
    alert(' sua média foi: ' + result + ' voce foi aprovado, bela bosta!!! ')
    else
    alert(' Sua média foi: ' + result + ' Você foi reprovado, acéfalo!!!! ')
}
function comparar(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if(val1==val2)
    alert('Os valores são iguais');
    else if(val1>val2)
    alert('valor 1 maior que valor 2');
    else
    alert('valor 2 é maior que valor 1');
}