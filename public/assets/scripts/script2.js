// Configuração da API
const apiKey = 'b6317aa040a8dc1ec1422906d4095f62';
const apiURL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR&page=1`;
const searchAPI = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&query=`;

// Elementos do DOM
const seriesGrid = document.getElementById('seriesGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Função para buscar séries populares
async function fetchAllSeries() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        renderSeries(data.results);
    } catch (error) {
        console.error('Erro ao buscar séries:', error);
    }
}

// Função para buscar séries por nome
async function fetchSeriesByName(query) {
    try {
        const response = await fetch(`${searchAPI}${query}`);
        const data = await response.json();
        renderSeries(data.results);
    } catch (error) {
        console.error('Erro ao buscar séries pelo nome:', error);
    }
}

// Função para renderizar séries
function renderSeries(series) {
    seriesGrid.innerHTML = '';

    series.forEach(serie => {
        const serieElement = document.createElement('div');
        serieElement.classList.add('serie-card');

        serieElement.innerHTML = `
            <a href="serie.html?id=${serie.id}">
                <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
            </a>
            <h3>${serie.name}</h3>
            <p>Avaliação: ${serie.vote_average}</p>
        `;

        seriesGrid.appendChild(serieElement);
    });
}

// Eventos
document.addEventListener('DOMContentLoaded', fetchAllSeries);

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchSeriesByName(query);
    }
});
