import Search from "./models/search";
import { elements, renderLoader, clearLoader } from "./base";
import * as searchView from "./views/searchView";
import * as movieView from "./views/movieView";
import { Movie } from "./models/movie";

const state = {};

// Search Controller
const searchController = async () => {
    const keyword = elements.searchInput.value;
    if (keyword) {
        state.search = new Search(keyword);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.movieListContainer);
        await state.search.getResults();
        searchView.displayResults(keyword, state.search.data);
        setTimeout(() => { clearLoader(elements.movieListContainer) }, 1000);
    }
    else {
        alert("Please enter the keyword.");
    }
}

elements.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchController();
    console.log("form submit");
})

// Movie Controller

const movieController = async () => {
    const id = window.location.hash.replace("#", "");
    if (id) {
        state.movie = new Movie(id);
        renderLoader(elements.movieDetailsContainer);
        await state.movie.getMovie();
        movieView.backToTop();
        movieView.displayMovie(state.movie.data);
        setTimeout(() => { clearLoader(elements.movieDetailsContainer) }, 1000);
    }
}

window.addEventListener("hashchange", movieController);

elements.movieDetailsClose.addEventListener("click", movieView.closeDetails)