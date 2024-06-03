document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja submetido
    
    
    alert('Formulário enviado!'); 
  });

  
let trilho = document.getElementById('trilho')

let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})