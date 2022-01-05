import React from "react";
import { NavLink } from "react-router-dom";
import { getAllRecipes } from "../actions";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  console.log(allRecipes);
  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div>
      <NavLink to="/">Go Back</NavLink>
      <div>component search</div>
      <div>
        <select>
          Orden
          <option value="Alfabetico +">A-Z</option>
          <option value="Alfabetico -">Z-A</option>
        </select>
        <select>
          Orden
          <option value="Rating +">Rating +</option>
          <option value="Rating -">Rating -</option>
        </select>
        <select>
          <option value="Diets"> filtrador de diets</option>
        </select>
      </div>
      <div>
        {allRecipes.map((e) => {
          return (
          <Card 
           key={e.id}
           title={e.title}
           image={e.image}
           diets={
               e.dataBase?
               e.diets.map((el)=>el.name):
               e.diets.map((el)=>el)
           }>
           </Card>)
        })}
      </div>
    </div>
  );
}

export default Home;

/*[ ] Input de búsqueda para encontrar recetas por nombre
[ ] Área donde se verá el listado de recetas. Deberá mostrar su:
Imagen
Nombre
Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
[ ] Botones/Opciones para filtrar por por tipo de dieta
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por puntuación
[ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina. */
