import axios from "axios";

const ACCESS_KEY = "_LfWUGA0-i62hQGGrtmG2hnkU-D6Mt6gNGfaU0eRR_4";

const client = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
  },
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: 12,
  },
});

const toImage = ({ id, alt_description, urls: { small, regular } }) => ({
  id,
  alt: alt_description,
  small,
  regular,
});

const getImages = async (query, page = 1) => {
  const response = await client.get("/search/photos", {
    params: { page, query },
  });
  const { results, total, total_pages } = response.data;

  return results.map(toImage);
};

export const UnsplashApi = { getImages };
