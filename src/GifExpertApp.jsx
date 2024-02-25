import { useState } from "react";
import { AddCategory, GifGird } from "./componets";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    //Valorant
    //Deja de usar push para agregar items a un arreglo
    if (categories.includes(newCategory)) return; //Si la categoría existe, haga un return
    //es decir, no haga nada, salga del script, si no existe siga con el script.
    //Podemos ser creativos para evaluar las restricciones, por ejemplo después de trim,
    //puede haber un toLowerCase(), para que todo tenga el mismo formato.
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GifGird key={category} category={category} />
      ))}
    </>
  );
};
