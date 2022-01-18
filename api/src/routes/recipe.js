const { Router} = require("express")
const {Recipe,Diet}=require("../db")

const {getAll, getById} = require("./getInfo")


const router = Router();

router.get("/",async(req,res)=>{
  const {name}= req.query
  const allrecipes= await getAll()

  if(name){
    var nameLower=name.toLowerCase()
    let arr=[]
    for(var i=0;i<allrecipes.length;i++){
        var title=allrecipes[i].title.toLowerCase()
        if(title.indexOf(nameLower)!=-1){
           arr.push(allrecipes[i])
        }
    }
    if(arr.length){
        return res.status(200).send(arr);
    }
    else{
        return res.status(404).send("No se encontro la receta")
    }
  }
  else{
    return res.status(200).send(allrecipes)
  }
})

router.get("/:id",async(req,res)=>{
    const {id} = req.params
    var idString=id.toString()
    if(idString.length>8){
        const createdDB = await Recipe.findAll({
            where:{
                id: id
            },
            include:{
                model:Diet

            }
        })
        res.status(200).json(createdDB)
    }
    else{
        const recipe = await getById(id)
        res.status(200).json(recipe)
    }
})
router.post("/",async(req,res)=>{
    let {title,summary,spoonacularScore,healthScore,analizedStructions,image,diet}=req.body

    const addRecipe= await Recipe.create({
        title,
        summary,
        spoonacularScore,
        healthScore,
        analizedStructions,
        image,
    })
    if(diet){
        const createdDB= await Diet.findAll({
            where:{
                name: diet
            }
        })
        await addRecipe.addDiets(createdDB)
        return res.status(200).send(addRecipe)
    }
    return res.status(200).send(addRecipe);
})

module.exports=router

/*title: {
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
    }, */