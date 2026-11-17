const url = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEqL448MhuVqwfi-FmDOH0wJNuqgY-_SQ_oju2ggf7AWdgEm9QJgoXK4GzQSSkiOGxO_IOaast3VyFtACd5qibTzdupl34IESQK0R8KZHuziKVJrvfa9myBFzdEXX3R-U38G0hjECxcKA==';

async function resolve() {
  const res = await fetch(url, { redirect: 'manual' });
  console.log('Location:', res.headers.get('location'));
}
resolve();
