// Configuração da API
const apiKey = 'b6317aa040a8dc1ec1422906d4095f62';
const apiURL = 'https://api.themoviedb.org/3/tv/';
const jsonServerFavoritesUrl = 'http://localhost:3000/favoritos';

// Obtendo o parâmetro da query string (ID da série)
const urlParams = new URLSearchParams(window.location.search);
const serieId = urlParams.get('id');

// Obtendo elementos do DOM
const seriePoster = document.getElementById('serie-poster');
const serieName = document.getElementById('serie-name');
const serieDescription = document.getElementById('serie-description');
const serieGenre = document.getElementById('serie-genre');
const serieRating = document.getElementById('serie-rating');
const serieReleaseDate = document.getElementById('serie-release-date');
const seriePlatform = document.getElementById('serie-platform');
const serieSeasons = document.getElementById('serie-seasons');
const serieStatus = document.getElementById('serie-status');
const castContainer = document.getElementById('cast-container'); // Correção: definindo `cast-container`
const addFavoriteButton = document.getElementById('add-favorite'); // Correção: definindo `add-favorite`

// Atualiza os detalhes da série
async function fetchSerieDetails() {
    try {
        const response = await fetch(`${apiURL}${serieId}?api_key=${apiKey}&language=pt-BR`);
        const serie = await response.json();

        seriePoster.src = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
        serieName.textContent = serie.name;
        serieDescription.textContent = serie.overview || 'Descrição indisponível';
        serieGenre.textContent = serie.genres.map(genre => genre.name).join(', ');
        serieRating.textContent = serie.vote_average || 'N/A';
        serieReleaseDate.textContent = serie.first_air_date || 'Indisponível';
        seriePlatform.textContent = 'Indisponível'; // Para streaming, use dados adicionais se disponíveis
        serieSeasons.textContent = serie.number_of_seasons || 'Indisponível';
        serieStatus.textContent = serie.status || 'Indisponível';
    } catch (error) {
        console.error('Erro ao buscar detalhes da série:', error);
    }
}

// Função para buscar o elenco da série
async function fetchSerieCast() {
    try {
        const response = await fetch(`${apiURL}${serieId}/credits?api_key=${apiKey}&language=pt-BR`);
        const data = await response.json();

        // Exibe os cards do elenco
        data.cast.forEach(actor => {
            if (actor.profile_path) { // Verifica se o ator tem uma imagem
                const actorCard = document.createElement('div');
                actorCard.classList.add('cast-card');
                actorCard.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${actor.profile_path}" alt="${actor.name}">
                    <p>${actor.name}</p>
                `;
                castContainer.appendChild(actorCard);
            }
        });
    } catch (error) {
        console.error('Erro ao buscar elenco da série:', error);
    }
}

// Função para adicionar a série aos favoritos
async function addToFavorites() {
    try {
        const response = await fetch(`${apiURL}${serieId}?api_key=${apiKey}&language=pt-BR`);
        const serie = await response.json();

        const favorite = {
            id: serie.id,
            name: serie.name,
            poster_path: serie.poster_path,
            vote_average: serie.vote_average,
            overview: serie.overview,
        };

        // Verifica se a série já foi adicionada aos favoritos
        const favorites = await fetch(jsonServerFavoritesUrl);
        const existingFavorites = await favorites.json();
        if (existingFavorites.some(fav => fav.id === favorite.id)) {
            alert('Série já está nos favoritos!');
            return;
        }

        // Adiciona aos favoritos no JSONServer
        await fetch(jsonServerFavoritesUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(favorite),
        });

        alert('Série adicionada aos favoritos!');
    } catch (error) {
        console.error('Erro ao adicionar aos favoritos:', error);
    }
}

// Carrega os detalhes da série e o elenco ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    fetchSerieDetails();
    fetchSerieCast();
});

// Adiciona a funcionalidade de favoritar a série
addFavoriteButton.addEventListener('click', addToFavorites);
