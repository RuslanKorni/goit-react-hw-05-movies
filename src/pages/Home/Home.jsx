import Title from 'components/Title/Title';
// import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrending } from 'service/fetchAPI';
import { useEffect, useState } from 'react';

const Home = () => {
//   const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // setLoader(true);
    fetchTrending()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        // setLoader(false);
      });
  }, []);

  return (
    <>
      <Title title="Trending today" />
      <MoviesList movies={movies}/>
    </>
  );
};

export default Home;
