// Configuração da API
const apiKey = 'b6317aa040a8dc1ec1422906d4095f62';
const apiURL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR&page=1`;
const providersAPI = `https://api.themoviedb.org/3/tv`;

// IDs das séries específicas
const featuredSeriesIds = [
    1399, 1396, 1431, 1402, 60735, 62286, 1412, 66732, 46261,
    82856, 60574, 60708, 63247, 110316, 71712, 76479
];

// Elementos do DOM
const carouselInner = document.querySelector('#seriesCarrossel .carousel-inner');
const popularSeriesContainer = document.querySelector('.popular-series-container');
const studentInfoContainer = document.getElementById('student-info');
const favoritosContainer = document.getElementById('favoritos-container');

// Função para buscar provedores de streaming
async function fetchProviders(serieId) {
    try {
        const response = await fetch(`${providersAPI}/${serieId}/watch/providers?api_key=${apiKey}`);
        const data = await response.json();
        const brazilProviders = data.results.BR;

        if (brazilProviders && brazilProviders.flatrate) {
            return brazilProviders.flatrate.map(provider => provider.provider_name).join(', ');
        }

        return 'Indisponível no Brasil';
    } catch (error) {
        console.error('Erro ao buscar provedores:', error);
        return 'Indisponível';
    }
}

// Função para buscar séries populares e exibí-las
async function fetchFeaturedSeries() {
    try {
        const promises = featuredSeriesIds.map(async (id) => {
            const response = await fetch(`${providersAPI}/${id}?api_key=${apiKey}&language=pt-BR`);
            return response.json();
        });

        const series = await Promise.all(promises);
        carouselInner.innerHTML = ""; // Limpa o carrossel
        popularSeriesContainer.innerHTML = ""; // Limpa a seção de séries populares

        series.forEach((serie, index) => {
            // Adicionar ao Carrossel
            const isActive = index === 0 ? "active" : "";
            const carouselItem = `
                <div class="carousel-item ${isActive}">
                    <img src="https://image.tmdb.org/t/p/w500${serie.backdrop_path}" class="d-block w-100" alt="${serie.name}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${serie.name}</h5>
                        <p>${serie.overview || "Descrição indisponível"}</p>
                        <a href="serie.html?id=${serie.id}" class="btn btn-warning">Ver detalhes</a>
                    </div>
                </div>
            `;
            carouselInner.innerHTML += carouselItem;

            // Adicionar à Seção de Séries Populares
            const seriesCard = document.createElement("div");
            seriesCard.classList.add("serie-card");

            seriesCard.innerHTML = `
                <a href="serie.html?id=${serie.id}">
                    <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                </a>
                <h3>${serie.name}</h3>
                <p>Avaliação: ${serie.vote_average}</p>
            `;

            popularSeriesContainer.appendChild(seriesCard);
        });
    } catch (error) {
        console.error("Erro ao buscar séries específicas:", error);
    }
}

// Função para buscar e exibir informações do aluno
async function fetchStudentInfo() {
    try {
        const response = await fetch('http://localhost:3000/author');
        const aluno = await response.json();

        const studentInfoContainer = document.getElementById('student-info');
        studentInfoContainer.innerHTML = `
            <div class="col-md-12 text-center">
                <div class="info-container">
                    <h3>${aluno.nome}</h3>
                    <p><strong>Curso:</strong> ${aluno.curso}</p>
                    <p><strong>Turma:</strong> ${aluno.turma}</p>
                    <p><strong>Bio:</strong> ${aluno.minibio}</p>
                    <p><strong>Redes Sociais:</strong></p>
                    <ul>
                        <li><a href="${aluno.redesSociais.Instagram}" target="_blank">Instagram</a></li>
                        <li><a href="${aluno.redesSociais.githun}" target="_blank">GitHub</a></li>
                    </ul>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Erro ao buscar informações do aluno:', error);
    }
}

// Função para exibir as séries favoritas
async function fetchFavoriteSeries() {
    try {
        const response = await fetch('http://localhost:3000/favoritos');
        const favoritos = await response.json();

        const favoritosContainer = document.getElementById('favoritos-container');
        favoritosContainer.innerHTML = ""; // Limpar antes de adicionar novos

        favoritos.forEach(serie => {
            const seriesCard = document.createElement("div");
            seriesCard.classList.add("serie-card");
            seriesCard.innerHTML = `
                <div class="serie-card-content">
                    <a href="serie.html?id=${serie.id}">
                        <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                    </a>
                    <h3>${serie.name}</h3>
                    <p>Avaliação: ${serie.vote_average}</p>
                    <button class="remove-favorite-btn" data-id="${serie.id}">X</button>
                </div>
            `;

            favoritosContainer.appendChild(seriesCard);
        });

        // Adiciona o evento de remover para cada botão de remoção
        const removeButtons = document.querySelectorAll('.remove-favorite-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', async (event) => {
                const serieId = event.target.getAttribute('data-id');
                await removeFromFavorites(serieId);
            });
        });

    } catch (error) {
        console.error('Erro ao buscar séries favoritas:', error);
    }
}

// Função para remover a série dos favoritos
async function removeFromFavorites(serieId) {
    try {
        // Busca a série no JSON Server
        const response = await fetch(`http://localhost:3000/favoritos/${serieId}`);
        const serie = await response.json();

        // Remove a série do JSON Server
        await fetch(`http://localhost:3000/favoritos/${serieId}`, {
            method: 'DELETE',
        });

        // Atualiza a lista de favoritos após a remoção
        fetchFavoriteSeries();

        alert('Série removida dos favoritos!');
    } catch (error) {
        console.error('Erro ao remover a série dos favoritos:', error);
    }
}




// Chama as funções ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    fetchFeaturedSeries();
    fetchStudentInfo();
    fetchFavoriteSeries();
});
