import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []); // Si el array está vacío, quiere decir que solo se renderiza esa función la primera vez

  return {
    images,
    isLoading,
  };
};
