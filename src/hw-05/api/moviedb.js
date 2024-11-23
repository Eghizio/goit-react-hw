import { httpClient } from "./http-client";

export const MovieApi = {
  async getTrendingMovies() {
    try {
      const response = await httpClient.get("/trending/movie/day");

      return response.data.results.map(this.mapMovie);
    } catch (error) {
      throw new Error("Failed to get trending movies.", { cause: error });
    }
  },

  async searchMovie(query) {
    try {
      const response = await httpClient.get("/search/movie", {
        params: { query, page: 1 },
      });

      return response.data.results.map(this.mapMovie);
    } catch (error) {
      throw new Error("Failed to search movies.", { cause: error });
    }
  },

  async getMovieDetails(movieId) {
    try {
      const response = await httpClient.get(`/movie/${movieId}`);
      console.log(response.data);

      return this.mapDetail(response.data);
    } catch (error) {
      throw new Error("Failed to get movie details.", { cause: error });
    }
  },

  async getMovieCast(movieId) {
    try {
      const response = await httpClient.get(`/movie/${movieId}/credits`);

      return response.data.cast.map(this.mapCast);
    } catch (error) {
      throw new Error("Failed to get movie credits.", { cause: error });
    }
  },

  async getMovieReviews(movieId) {
    try {
      const response = await httpClient.get(`/movie/${movieId}/reviews`);

      return response.data.results.map(this.mapReview);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get movie reviews.", { cause: error });
    }
  },

  mapMovie(movie) {
    return {
      id: movie.id,
      title: movie.title,
    };
  },

  mapDetail(detail) {
    return {
      id: detail.id,
      title: detail.title,
      releaseYear: detail.release_date.slice(0, 4),
      poster: detail.poster_path
        ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
        : null,
      userScore: (detail.vote_average * 10).toFixed(2) + "%",
      overview: detail.overview,
      genres: detail.genres.map((g) => g.name).join(" "),
    };
  },

  mapCast(cast) {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character,
      image: cast.profile_path
        ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
        : null,
    };
  },

  mapReview(review) {
    return {
      id: review.id,
      author: review.author,
      content: review.content,
    };
  },
};
