function verificar(){      //window.alert('Funcionou')//
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res') // outra froma de fazer alem da de cima //
    if (fano.value.length == 0 || Number(fano.valeu) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua Idade: ${idade}` 
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher' 
        }
        res.style.textAlign = 'center' // centralizando com javascript ao inves de css //
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
     

}