import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Reviewscard} from './Reviews.styled';
import {fetchReviews} from 'service/fetchAPI';
const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const {movieId} = useParams();
    console.log(movieId);

    useEffect(() => {
        fetchReviews(movieId).then(({results}) => {
            setMovieReviews(results)
        })
    }, [movieId]);

    return <>
    {movieReviews.length > 0 ? (
        movieReviews.map(({ id, author, content }) => {
          return (
            <Reviewscard key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </Reviewscard>
          );
        })
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
}

export default Reviews;