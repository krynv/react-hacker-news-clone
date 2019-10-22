const HACKER_NEWS_API_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = query => fetch(`${HACKER_NEWS_API_URL}${query}`).then(response =>
    response.json()
);

export { fetchStories };

