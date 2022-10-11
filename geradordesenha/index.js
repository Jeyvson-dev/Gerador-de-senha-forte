var letras = ["a", "b", "c", , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var letrasM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var especial = ["*", "@", "#", "$", "%", "&", "+"]
var senha = ""
var senhaC = ""
var quantidade = document.getElementById('quantidade')
var senhaG = document.getElementById('senhaG')


function gerar() {


    if (Number(quantidade.value) == 0) {

        window.alert("Digite um valor válido")

    } else {

        senhaC = ""
        for (cont = 0; cont <= 10; cont++) {


            senha = letras[Math.floor((Math.random() * letras.length))]

            senha += numeros[Math.floor((Math.random() * numeros.length))]

            senha += especial[Math.floor((Math.random() * especial.length))]

            senha += letrasM[Math.floor((Math.random() * letrasM.length))]


            senhaC += senha

        }


        senhaG.innerText = `Senha gerada: ${Random(senhaC)}`

        quantidade.value = ''

    }

}


function Random(a) {

    var quantidade = document.getElementById('quantidade').value
    var swap = ""

    for (var i = 0; i < Number(quantidade); i++) {

        swap += a[Math.floor((Math.random() * a.length))]


    }

    return swap

}