import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paragraph } from './Reviews.styled';
import movieAPI from 'services/movie-api';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    movieAPI
      .getMovieReviews({ id })
      .then(response => {
        setReviews(response.results);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <section>
      {reviews.length >= 1 ? (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <Paragraph>
                Author: <span>{author}</span>
              </Paragraph>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't any have reviews for this movie.</p>
      )}
    </section>
  );
};

export default Reviews;