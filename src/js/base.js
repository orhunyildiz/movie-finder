export const elements = {
    searchForm: document.querySelector("#form-search"),
    searchInput: document.querySelector("#txt-keyword"),
    searchResults: document.querySelector("#movie-list"),
    movieDetails: document.querySelector("#movie-details"),
    movieDetailsContainer: document.querySelector("#movie-details-container"),
    movieListContainer: document.querySelector("#movie-list-container"),
    movieDetailsClose: document.querySelector("#movie-details-close"),
    movieListHeader: document.querySelector("#movie-list-header")
}

export const renderLoader = parent => {
    const loader = `
        <div class="text-center">
            <div class="spinner-grow text-danger text-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`;
    parent.insertAdjacentHTML("beforebegin", loader);
}

export const clearLoader = parent => {
    const loader = parent.previousSibling;
    if (loader) {
        loader.parentNode.removeChild(loader);
    }
}

export const imageSizes = {
    backdrop_sizes: [
        "w300",
        "w780",
        "w1280",
        "original"
    ],
    logo_sizes: [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
    ],
    poster_sizes: [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
    ],
    profile_sizes: [
        "w45",
        "w185",
        "h632",
        "original"
    ],
    still_sizes: [
        "w92",
        "w185",
        "w300",
        "original"
    ]
}