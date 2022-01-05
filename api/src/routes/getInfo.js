const axios = require("axios");
const {API_KEY,API_KEY2}=process.env;
const {Recipe,Diet}=require("../db")


var x=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&number=100&addRecipeInformation=true`
const getApi = async()=>{
   const arr=[]
   const {data} = await  axios.get(x)
   for(let i=0;i<data.results.length;i++){
      const recipeProps ={
          id: data.results[i].id,
          title: data.results[i].title,
          analyzedInstructions: data.results[i].analyzedInstructions,  //recordar usar steps.step porque es un objeto con un array de objetos con propiedad "step" que es un string
          summary: data.results[i].summary,
          image: data.results[i].image,
          healthScore: data.results[i].healthScore,
          spoonacularScore: data.results[i].spoonacularScore,
          diets:data.results[i].diets
          //diet
      }
      arr.push(recipeProps)
   }
   return arr
}
const getById =async(id)=>{
  const {data}=await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`)
  const props={
      id: data.id,
      title: data.title,
      analyzedInstructions: data.analyzedInstructions,
      summary: data.summary,
      image: data.image,
      healthScore: data.healthScore,
      spoonacularScore:data.spoonacularScore,
      diets:data.diets
  }
  return props;
}


const getDbInfo = async()=>{
    return await Recipe.findAll({ 
      include:{
          model: Diet,
          attributes: ["name"],
          through:{
          attributes:[]
          }
      }
    })
  }

const getAll=async()=>{
    const apiData = await getApi();
    const dbData = await getDbInfo();
    const mergeData= apiData.concat(dbData);
    return mergeData
}

module.exports={
    getAll,
    getById
}

/*spoonacularScore:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    healthScore:{ */