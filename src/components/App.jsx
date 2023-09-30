import Home from 'pages/Home';
import {NavLink, Routes ,Route} from 'react-router-dom';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <header> <nav>
  <NavLink to='/'>Home</NavLink>
  <NavLink to='/movies'>Movies</NavLink>
     </nav></header>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<div>Collection with moives</div>} />
      <Route path='/movies/:movieId' element={<div>element of collection</div>} />
     </Routes>
    </div>
  );
};


//ffd1ae05d42dfac2dc67614233fe514e

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmQxYWUwNWQ0MmRmYWMyZGM2NzYxNDIzM2ZlNTE0ZSIsInN1YiI6IjY1MTZlMGNlZDQ2NTM3MDlkZDc2ODYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jEpATr4gBgP_cZbpibPKl-m5IQWY8EVeaswZFbShPac
