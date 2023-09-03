import { elements } from "../base";

export const clearInput = () => {
    elements.searchInput.value = "";
}

export const clearResults = () => {
    elements.searchResults.innerHTML = "";
}

export const displayResults = (keyword, data) => {
    data.results.forEach(movie => {
        const html = `
            <div class="d-flex align-items-center mb-3">
                <div class="flex-shrink-0">
                    <img src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://placehold.co/92x138';" alt="${movie.title}" />
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5 class="mt-0 mb-1">
                        <span class="badge bg-primary">${movie.vote_average.toFixed(1)}</span>
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
            </div>
        `;
        elements.movieListHeader.innerHTML = `There are ${data.total_results} results for ${keyword}.`;
        elements.movieListContainer.classList.replace("d-none", "d-block");
        elements.searchResults.insertAdjacentHTML("afterbegin", html);
    });
}