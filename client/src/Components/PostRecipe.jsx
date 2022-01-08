import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postRecipel, getDiets } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function PostRecipe() {
  const dispatch = useDispatch();
  const diet = useSelector((state) => state.diet);
  const [input, setInput] = useState({
    title: "",
    summary: "",
    spoonacularScore: 0,
    healthScore: 0,
    analizedStructions:"",
    image: "",
    diet: [],  //identico al de database
  });


  const keys = Object.keys(input);
  keys.pop();
  var keysForm = 1;

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      diet: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipel(input));
    setInput({
      title: "",
      summary: "",
      spoonacularScore: 0,
      healthScore: 0,
      analizedStructions: "",
      image: "",
      diet: [],
    });
  }
  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        diet: [...input.diet, e.target.value],
      });
    } else {
      setInput({
        ...input,
        diet: input.diet.filter((e) => e !== e.target.value),
      });
    }
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);


  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          {keys?.map((e) => (
            <div key={++keysForm}>
              <div>
                <label>
                  <h2>{e.toUpperCase()}:</h2>
                </label>
              </div>
              <input
                type="text"
                name={e}
                value={input.e}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          ))}
          <div>
            <div>
              {diet?.map((e) => (
                <div key={keysForm++}>
                  <div>
                    <label>
                      <h2>{e.name}</h2>
                    </label>
                  </div>
                  <input
                    onChange={(e) => handleCheck(e)}
                    type="checkbox"
                    name={e.name}
                    value={e.name}
                  ></input>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button>Create Recipe</button>
          </div>
        </div>
      </form>
      <NavLink to="/home">Go back</NavLink>
    </div>
  );
}

export default PostRecipe;
/*sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    spoonacularScore:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    analizedStructions:{
      type: DataTypes.TEXT,
      allowNull:true
    },
    image:{
      type: DataTypes.TEXT,
      allowNull:true
    },
    dataBase:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }, */
