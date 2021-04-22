const obrazky = document.querySelectorAll('img');

obrazky.forEach((obrazek) => {
	obrazek.addEventListener('click', function(event){
		zobrazKalorie(event);
	});
});

function zobrazKalorie(udalost) {
	let obrazek = udalost.target;

	let kalorie = obrazek.dataset.kalorie;
	let zeme = obrazek.dataset.zemePuvodu;

	document.querySelector('#vysledek').textContent = 'Snědla jsi ' + kalorie + ' kcal/100g a země původu je ' + zeme + '.';
}