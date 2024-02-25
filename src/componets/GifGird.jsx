// eslint-disable-next-line react/prop-types
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
export const GifGird = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);//Custom Hook

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      } 
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} /* ...image es esparcir el prop */
          />
        ))}
      </div>
    </>
  );
};

