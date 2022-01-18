import React from "react";
import { useHistory } from "react-router-dom";
import { getAllRecipes, getDiets, orderRank } from "../actions";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { useState } from "react";
import { orderAbc } from "../actions";
import { filterDiets } from "../actions";
import "../styles/home.css";
import "../styles/grid.css";
import "../styles/GiantTitle.css";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const diet = useSelector((state) => state.diet);
  

  const [page, setPage] = useState(1);
  const [recipeNum] = useState(9);

  const [, setOrder] = useState("");

  var lastI = page * recipeNum;
  var firstI = lastI - recipeNum;

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const paginado = (x) => {
    setPage(x);
  };

  function handleorderAbc(e) {
    e.preventDefault();
    dispatch(orderAbc(e.target.value));
    setPage(1);

    setOrder(e.target.value);
  }

  function handleorderRank(e) {
    e.preventDefault();
    dispatch(orderRank(e.target.value));
    setPage(1);

    setOrder(e.target.value);
  }

  function handleDiets(e) {
    e.preventDefault();
    dispatch(filterDiets(e.target.value));
    setPage(1);

    setOrder(e.target.value);
  }

  var i = 1;
  function handleBack() {
    history.push("/");
  }
  function handleCreate() {
    history.push("/recipe");
  }

  const allPagesR = allRecipes.slice(firstI, lastI);

  return (
    <div className="font">
      <div className="bigTitle">
        <h1>Recipe Book</h1>
      </div>
      <br />
      <button className="goback" type="button" onClick={() => handleBack()}>
        Go Back
      </button>
      <div className="pages">
        <SearchBar></SearchBar>
        
        <button type="button" className="create" onClick={() => handleCreate()}>
          <span>{" Create Recipe 🍕"}</span>
        </button>
      </div>
      <div className="filters">
        <h4>Filters</h4>
        <select onChange={(e) => handleorderAbc(e)}>
          Orden
          <option value="Alfabetico +">A-Z</option>
          <option value="Alfabetico -">Z-A</option>
        </select>
        <select onChange={(e) => handleorderRank(e)}>
          Orden
          <option value="Rating +">Rating +</option>
          <option value="Rating -">Rating -</option>
        </select>
        <select onChange={(e) => handleDiets(e)}>
          <option  value="all">All Diets</option>
          {diet?.map((e) => (
            <option  key={i++} name={e.name} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        <br />
      </div>
      <div>
        <div>
          <br />
          <div>
          <Pagination
            allrecipes={allRecipes.length}
            paginado={paginado}
            recipeNum={recipeNum}
          />
          </div>
          <br />
          <div className="grid">
            {allPagesR.map((e) => {
              return (
                <div className="division" key={i++}>
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
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <Pagination
            allrecipes={allRecipes.length}
            paginado={paginado}
            recipeNum={recipeNum}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
