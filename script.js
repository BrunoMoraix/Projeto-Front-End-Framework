var tamanho_padrao = 16;

document.getElementById('botao_up').addEventListener('click', function(){
    tamanho_padrao++;
    document.getElementById('tamanho_fonte').innerHTML = "" + tamanho_padrao;
    document.getElementById('txt').style.fontSize = tamanho_padrao +"px";
})

document.getElementById('botao_down').addEventListener('click', function(){
    tamanho_padrao--;
    document.getElementById('tamanho_fonte').innerHTML = ""+ tamanho_padrao;
    document.getElementById('txt').style.fontSize = tamanho_padrao +"px";
})




// --------Modo Dark-------
let trilho = document.getElementById('trilho')

let body = document.querySelector('body')

let footer = document.querySelector('footer')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    footer.classList.toggle('dark')
})