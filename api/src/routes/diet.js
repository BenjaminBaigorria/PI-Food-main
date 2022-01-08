const { default: axios } = require("axios");
const { Router} = require("express")
const {Recipe,Diet}=require("../db")
const {API_KEY,API_KEY2} =process.env
const {getAll} = require("./getInfo")


const router = Router();

var x=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&number=100&addRecipeInformation=true`

router.get("/",async(req,res)=>{
    const {data} = await axios.get(x)
    const propDiet = data.results.map(e=>e.diets)
    var variable=propDiet.join(",").split(",")
    
    for(let i=0;i<variable.length;i++){
        if(variable[i].length<1){variable[i]="ketogenic"}
        await Diet.findOrCreate({
            where:{
                name: variable[i],
            },
        });
      }
    const Alltypes = await Diet.findAll()
    return res.status(200).send(Alltypes)
})
module.exports=router