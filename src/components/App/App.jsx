import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';


const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("pages/Cast"));
const Reviews = lazy(() => import("pages/Reviews"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};