import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { postRecipel, getDiets } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "../styles/post.css"

function PostRecipe() {
  const dispatch = useDispatch();
  const diet = useSelector((state) => state.diet);
  const [input, setInput] = useState({
    title: "",
    summary: "Just a Standart Meal",
    spoonacularScore: 0,
    healthScore: 0,
    analizedStructions: "",
    image: "https://i.blogs.es/466661/650_1000_skin-healthy-food/1366_2000.jpg",
    diet: [], //identico al de database
  });
  
  const [errors, setErrors] = useState({})

  const keys = Object.keys(input);
  keys.pop();
  var keysForm = 1;

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
      diet: e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(input.spoonacularScore<=100&&input.spoonacularScore>=0){
      dispatch(postRecipel(input));
      setInput({
        title: "",
        summary: "Just An Standart Meal",
        spoonacularScore: 0,
        healthScore: 0,
        analizedStructions: "",
        image:"https://i.blogs.es/466661/650_1000_skin-healthy-food/1366_2000.jpg",
        diet: [],
      });
    }
    else{
      return alert("spoonacularScore should be a number between 100 and 0")
    }
  }
  function handleCheck(e) {
    if(e.target.checked) {
      setInput({
        ...input,
        diet: [...input.diet, e.target.value],
      });
    } else {
      setInput({
        ...input,
        diet: input.diet?.filter((t) => t !== e.target.value),
      });
    }
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);



  function validate(){
    let errors={}
    if(!input.title){errors.title= "title required"}
    if(input.spoonacularScore>100 || input.spoonacularScore<0){errors.spoonacularScore="SpoonacularScore Should be a number between 0 & 100"}
    if(input.healthScore>100 || input.healthScore<0){errors.healthScore=" Healthscore Should be a number between 0 & 100"}
    return errors;
  }
  var k=Object.keys(errors);

  return (
    <div>
      <div className="bigtititlecreate">
        <h1>Create Recipe</h1>
      </div>
      <form className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >

        <div className="formkeys">
          {keys?.map((e) => (
            <div key={++keysForm}>
                <label>
                  <h2>{e.toUpperCase()}:</h2>
                </label>      
              <input
                type="text"
                name={e}
                value={input.e}
                onChange={(e) => handleChange(e)}
              ></input> 
            </div>
          ))}
          <br />
          <br />
              {errors?.title && <div className="err">{errors.title}</div>}
              {errors?.spoonacularScore && <div className="err">{errors.spoonacularScore}</div>}
              {errors?.healthScore && <div className="err">{errors.healthScore}</div>}
          <div>
            <div className="options">
              {diet?.map((e) => (
                <div  key={keysForm++}>
                  <div className="optionDiv">
                    <label>
                      <h2>{e.name}</h2>
                    </label>
                  <input className="check"
                    value={e.name}
                    onChange={(e) => handleCheck(e)}
                    type="checkbox"
                    name={e.name}
                  ></input>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div>
            {
               !k.length? <button className="butt">Create Recipe</button>: <div>Please complete all fields</div>
            }
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
