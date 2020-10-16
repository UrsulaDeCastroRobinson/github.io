const meuCabecalho = document.querySelector('h3');
meuCabecalho.textContent = 'Ola mundo!';


let minhaImagem = document.querySelector('img');

minhaImagem.onclick =function() {
	let meuSrc = minhaImagem.getAttribute('src');
	if(meuSrc === 'imagens/starbirth600.jpg') {
		minhaImagem.setAttribute ('src', 'imagens/nebula.jpg');
	} else {
		minhaImagem.setAttribute ('src', 'imagens/starbirth600.jpg')
	}
}

let meuBotao = document.querySelector('button')
let meuCabeclho = document.querySelector('h3')
function defineNomeUsuario () {
	let meuNome = prompt('Por favor, digite seu nome.');
	localStorage.setItem('nome', meuNome);
	meuCabecalho.textContent = 'Embarque já,' + meuNome;
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Embarque já, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}