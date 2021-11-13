function verificar(){      //window.alert('Funcionou')//
    
    var data = new Date() // Data atual
    var ano = data.getFullYear() // insere os 4 digitos do ano atual
    var fano = document.getElementById('txtano') // recebe dados do elemento 'txtano'
    //var res = document.getElementById('res') // recebe dados do elemento 'res'
    var res = document.querySelector('div#res') // outra froma de fazer alem da de cima //
    if (fano.value.length == 0 || Number(fano.valeu) > ano) { // se o ano for == o ou o ano > atual 
        window.alert('[Erro] Verifique os dados e tente novamente') // Alerta na tela
    } else {
        var fsex = document.getElementsByName('radsex') // variavel que recebe elemrnto 'radsex'
        var idade = ano - Number(fano.value) // variavel que calcula a idade
        res.innerHTML = `Sua Idade: ${idade}` // imprime na tela a idade 
        var genero = '' // Variavel gereno recebe vazio
      //var img = document.criateElement('img')
      //img.setAttribute('id','foto')
        if (fsex[0].checked) { // se fsex for marcado
            genero = 'Homem' // variavel genero recebe 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher' // variavel genero recebe 'Mulher'
        }
        res.style.textAlign = 'center' // centralizando com javascript ao inves de css //
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` // Escreve na tela ...
    }
     

}