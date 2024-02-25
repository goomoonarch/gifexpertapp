export const getGifs = async (category) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=imbkYtq2n8EaWK2ZIIV01Q7KNhSM0lzo&limit=10`,
    requestOptions
  );
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
