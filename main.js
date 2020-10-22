function rev(){

let str = document.getElementById('txt').value
if(str === '')
{
    alert('champ requise')
}
else
{
     var str1 = str.split('').reverse().join('')
     
    document.getElementById('result').innerHTML = 'la chaîne renversée est: ' + str1 
}
}