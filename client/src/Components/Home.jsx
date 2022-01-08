import React from "react";
import { NavLink } from "react-router-dom";
import { getAllRecipes, getDiets, orderRank } from "../actions";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { useState } from "react";
import { orderAbc } from "../actions";
import { filterDiets } from "../actions";


function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const diet = useSelector(state => state.diet)
  const allrecipes2=allRecipes;

  const [page, setPage] = useState(1);
  const [recipeNum] = useState(9);

  const [order, setOrder] = useState("")

  var lastI = page * recipeNum;
  var firstI = lastI - recipeNum;

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getDiets())
  },[dispatch])


  const paginado = (x) => {
    setPage(x);
  };

  function handleorderAbc(e){
     e.preventDefault()
     dispatch(orderAbc(e.target.value))
     setPage(1)

     setOrder(e.target.value)
  }
  function handleorderRank(e){
     e.preventDefault()
     dispatch(orderRank(e.target.value))
     setPage(1)

     setOrder(e.target.value)
  }
   function handleDiets(e){
    e.preventDefault()
    dispatch(filterDiets(e.target.value))
    setPage(1)

    setOrder(e.target.value)
  }
  var i=1;
  
  const allPagesR = allRecipes.slice(firstI, lastI);

  return (
    <div>
      <NavLink to="/">Go Back</NavLink>
      <div>
        <SearchBar></SearchBar>
        <NavLink to="/recipe">Create Recipe</NavLink>
      </div>-
      <div>
        <select onChange={(e)=>handleorderAbc(e)}>
          Orden
          <option value="default">default</option>
          <option value="Alfabetico +">A-Z</option>
          <option value="Alfabetico -">Z-A</option>
        </select>
        <select onChange={(e)=>handleorderRank(e)}>
          Orden
          <option value="default">default</option>
          <option value="Rating +">Rating +</option> 
          <option value="Rating -">Rating -</option>
        </select>
        <select onChange={(e)=>handleDiets(e)}>
          {diet?.map((e)=><option key={i++} name={e.name} value={e.name}>{e.name}</option>)}
        </select>
      </div>
      <div>
        <div>
          <Pagination
            allrecipes={allRecipes.length}
            paginado={paginado}
            recipeNum={recipeNum}
          />
          {allPagesR.map((e) => {
            return (
              <Card
                id={e.id}
                key={e.id}
                title={e.title}
                image={e.image}
                diets={
                  e.dataBase
                    ? e.diets.map((el) => el.name)
                    : e.diets.map((el) => el)
                }
              ></Card>
            );
          })}
        </div>
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
