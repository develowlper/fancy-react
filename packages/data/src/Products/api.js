const get = async () => {
  const res = await fetch(
    'https://5c6dea1c4fa1c900142422aa.mockapi.io/products',
    {
      method: 'GET'
    }
  );
  const data = await res.json();
  return data;
};

export { get };
