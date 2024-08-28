export const newsOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${import.meta.env.VITE_REACT_APP_API_KEY}`,
      'x-rapidapi-host': 'news-api14.p.rapidapi.com'
    }
  };