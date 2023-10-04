import { useState, useEffect} from 'react';
import { getMovieTrends } from '../services/theMoiveApi';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { TitleMain } from '../components/Title/Title';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    document.addEventListener('scroll', handleScroll);

    return function () {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const fetchedData = await getMovieTrends(currentPage);

        setTrendingMovies(prevState => [...prevState, ...fetchedData]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [currentPage]);

  const handleScroll = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <>
      <TitleMain>Trending today</TitleMain>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;

// const fetchMovies = useCallback(async () => {

//   try {

//   const fetchedData = await getMovieTrends(currentPage);

//     setTrendingMovies((prevState) => [...prevState,...fetchedData]);

//      setCurrentPage(prev => prev+1)
//   } catch (error) {
//     console.log(error.message);
//   } finally {

//     setloading(false);
//   }
// },[currentPage]);

// useEffect(() => {

//     if(loading) {

//       fetchMovies();
//     }

// },[loading,fetchMovies]);
