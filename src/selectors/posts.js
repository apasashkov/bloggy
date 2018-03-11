const filterTypes = {
  byContent: 'content',
  byTitle: 'title',
};

// get visible posts
export default (posts, { text, sortBy, filterType }) => posts.filter((post) => {
  // figure out if post.title has the text inside
  const textMatch = post[filterTypes[filterType]].toLowerCase().includes(text.toLowerCase());
  return !!textMatch;
}).sort((a, b) => {
  if (sortBy === 'createdAt') {
    return a.created_at < b.created_at ? 1 : -1;
  } else if (sortBy === 'views') {
    return a.views < b.views ? 1 : -1;
  }
  return null;
});
