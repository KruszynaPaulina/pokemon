$( document ).ready(function() {
    var url = "https://pokeapi.co/api/v2/pokemon/";

	var tablePokemons = $(".tablePokemons");

	function getPokemon() {
		$.ajax({
			method: 'GET',
			url: url, 
			success: showData
		});
	}

	function showData(resp) {
		var arrayPokemons = resp.results;
		
	    arrayPokemons.forEach(function showPokemon(pokemon, i) {
	    	i += 1;

	    	var rowPokemon = $("<tr></tr>");
	    	tablePokemons.append(rowPokemon);
	    	
	    	var namePokemon = $("<td>" + pokemon.name + "</td>");
	    	rowPokemon.append(namePokemon);

	    	var imagePokemon = $("<td><img src='https://pokeapi.co/media/img/" + i + ".png' alt='obrazek'></td>")
			rowPokemon.append(imagePokemon);

	    });
	    
	};

	getPokemon();

	/*
	function showData(resp) {
		var arrayPokemons = resp.results;
		
	    arrayPokemons.forEach(function showPokemonName(pokemon, i) {
	    	i += 1;
	    	tablePokemons.append("<tr class=" + i + "><td>" + pokemon.name + "</td></tr>");
	    });
	    
	};

	getPokemon()

	function showPokemonImage() {
		
		for (var x=1; x<=20; x++) {
		    $('body').append("<img src='https://pokeapi.co/media/img/" + x + ".png' alt='obrazek'>");
		}
	}

	showPokemonImage();
	*/

});




