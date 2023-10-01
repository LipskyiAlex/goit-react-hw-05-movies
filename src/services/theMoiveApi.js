import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'ffd1ae05d42dfac2dc67614233fe514e';

const movieID = 2321; // test

const queries = {
  trends: 'trending/all/day',
  search: 'search/movie', // ?key &query=
  casts: `movie/${movieID}/cast`,
  reviews: `movie/${movieID}/reviews`, // key
};

export async function Trends() {
  try {
    const { data } = await axios.get(`${queries.trends}?api_key=${API_KEY}`);

    return data.results;
  } catch (error) {
    return Notiflix.Notify.failure(
      `${error.message}, please contact the administrator`
    );
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    
    return data;
  } catch (error) {
    return Notiflix.Notify.failure(
      `${error.message}, please contact the administrator`
    );
  }
}

export async function getCastById(id) {
  try {
    const { data } = await axios.get(
      `movie/${id}/cast?api_key=${API_KEY}`
    );
    console.log(data);
    return data;
  } catch (error) {
    return Notiflix.Notify.failure(
      `${error.message}, please contact the administrator`
    );
  }
}
