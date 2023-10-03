import { lazy, Suspense } from "react";
import {Routes ,Route} from 'react-router-dom';


// import { SharedLayout } from './SharedLayout/SharedLayout';
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const Cast = lazy(() => import('./Cast/Cast'))
const Movies = lazy(() => import('../pages/Movies'))
const Home = lazy(()  => import('pages/Home'));
export const App = () => {
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:movieId' element={<MovieDetails/>}>
        <Route path='/movies/:movieId/cast' element={<Cast/>}/>
        <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
      </Route>
      </Route>
     </Routes>
     </Suspense>
    </>
  );
};

