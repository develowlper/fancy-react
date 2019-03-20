const get = async () => {
  const res = await fetch('https://unsplash.it/500/500', {
    method: 'GET'
  });
  const data = res.url;
  return data;
};

export { get };
