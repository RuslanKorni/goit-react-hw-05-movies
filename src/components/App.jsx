import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import Cast from 'components/Cast/Cast';
import MoviesDetails from '../pages/MoviesDetails/MoviesDetails';
import Layout from './Layout/Layout';

// '/' - компонент Home, домашня сторінка зі списком популярних кінофільмів.

// '/movies' - компонент Movies, сторінка пошуку кінофільмів за ключовим словом.

// '/movies/:movieId' - компонент MovieDetails, сторінка з детальною інформацією про кінофільм.

// /movies/:movieId/cast - компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.

// /movies/:movieId/reviews - компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<div>a</div>} />
            <Route path="reviews" element={<div>b</div>} />
          </Route>
        </Route>
      </Routes>
  );
};
