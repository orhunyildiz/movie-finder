import { elements } from "../base.js";

export const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

export const displayMovie = movie => {
    var html = '<div class="row">'
    var genres = "";

    movie.genres.forEach(genre => {
        genres += `<span class="badge bg-primary ms-1">${genre.name}</span>`
    });

    html += `
        <div class="d-flex align-items-center mb-3">
            <div class="col-md-4 flex-shrink-0">
                <img src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}" class="img-fluid" onerror="this.src='https://placehold.co/92x138';" alt="${movie.title}" />
            </div>
            <div class="flex-grow-1 ms-3 col-md-8">
                <h5 class="mt-0 mb-1">
                    <span class="badge bg-primary">${movie.vote_average.toFixed(1)}</span>
                    <a href="#${movie.id}">${movie.title}</a>
                </h5>
                <p>${movie.overview}</p>
                <hr>
                ${genres}
            </div>
        </div>
    `

    html += "</div>";

    elements.movieDetailsContainer.classList.replace("d-none", "d-block");
    elements.movieDetails.innerHTML = html;
}

export const closeDetails = () => {
    elements.movieDetailsContainer.classList.replace("d-block", "d-none");
}