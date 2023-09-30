import { useEffect } from "react";

const Home = () => {

  

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=ffd1ae05d42dfac2dc67614233fe514e')
    .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  },[])

    return (

        <h1>Trending today</h1>
     )
  
}

export default Home;

// `trending/movie/week?api_key=${API_KEY}`);

