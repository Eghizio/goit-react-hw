import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Spinner } from "./components/Spinner/Spinner.jsx";
import css from "./App.module.css";

const getNamed = (name) => (module) => ({ default: module[name] });

const HomePage = lazy(() =>
  import("./pages/HomePage.jsx").then(getNamed("HomePage"))
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.jsx").then(getNamed("MoviesPage"))
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage.jsx").then(getNamed("MovieDetailsPage"))
);
const MovieCast = lazy(() =>
  import("./components/MovieCast/MovieCast.jsx").then(getNamed("MovieCast"))
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews.jsx").then(
    getNamed("MovieReviews")
  )
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.jsx").then(getNamed("NotFoundPage"))
);

const Suspensed = ({ comp }) => (
  <Suspense fallback={<Spinner />}>{comp}</Suspense>
);

export const Homework_05 = () => {
  return (
    <div className={css.app}>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Suspensed comp={<HomePage />} />} />

          <Route path="/movies" element={<Suspensed comp={<MoviesPage />} />} />

          <Route
            path="/movies/:movieId"
            element={<Suspensed comp={<MovieDetailsPage />} />}
          >
            <Route path="cast" element={<Suspensed comp={<MovieCast />} />} />
            <Route
              path="reviews"
              element={<Suspensed comp={<MovieReviews />} />}
            />
          </Route>

          <Route path="*" element={<Suspensed comp={<NotFoundPage />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
