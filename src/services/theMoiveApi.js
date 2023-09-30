
const baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ffd1ae05d42dfac2dc67614233fe514e';

const movieID = 2321; // test
const queries = {

    trends: 'trending/all/day',
    search: 'search/movie', // ?key &query=
    getById: `moive?${API_KEY}/query=`,
    casts: `movie/${movieID}/credits`,
    reviews: `movie/${movieID}/reviews `  // key
 }



