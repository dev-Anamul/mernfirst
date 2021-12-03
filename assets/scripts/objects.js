const addMovieBtn = document.getElementById('add-movie-btn');
const serchBtn = document.getElementById('search-btn');

/// //////  show field
const movies = [];

/// /// render movie

const renderMovies = (filterText) => {
    const movieListField = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieListField.classList.remove('visible');
    } else {
        movieListField.classList.add('visible');
    }

    movieListField.innerHTML = '';

    const filteredMovie = !filterText
        ? movies
        : movies.filter((movie) => movie.info.title.includes(filterText));

    filteredMovie.forEach((el) => {
        const movieElmt = document.createElement('li');

        let text = `${el.info.title} -`;

        // eslint-disable-next-line no-restricted-syntax
        for (const key in el.info) {
            if (key !== 'title') {
                text += `${key}: ${el.info[key]}`;
            }
        }
        movieElmt.innerText = text;
        movieListField.append(movieElmt);
    });
};

// eslint-disable-next-line consistent-return
const addNewMovie = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return null;
    }
    const movieInfo = {
        info: {
            title,
            [extraName]: extraValue,
        },
        key: Math.random(),
    };
    movies.push(movieInfo);
    renderMovies();

    /// ////  empty the input element
    document.getElementById('title').value = '';
    document.getElementById('extra-name').value = '';
    document.getElementById('extra-value').value = '';
};

const serchFunc = () => {
    const filterText = document.getElementById('filter-title').value;
    renderMovies(filterText);
};

addMovieBtn.addEventListener('click', addNewMovie);
serchBtn.addEventListener('click', serchFunc);
