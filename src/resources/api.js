const API_KEY = "OEpFgVWTZa638ufKL6uqIw4UanD7jKmz";

export const SEARCH_BY_KEYWORD = `http://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}`;

export const TRENDING = `http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}`;

export const RANDOM = `http://api.giphy.com/v1/gifs/random?&api_key=${API_KEY}`;

export const fetchByKeyword = async (searchText, offset, limit) => {
  const url = `${SEARCH_BY_KEYWORD}&limit=${limit}&offset=${offset}&q=${searchText}`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const fetchTrending = async (offset, limit) => {
  const url = `${TRENDING}&limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const fetchRandom = async () => {
  const url = `${RANDOM}`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (e) {
    console.error(e);
  }

  return null;
};
