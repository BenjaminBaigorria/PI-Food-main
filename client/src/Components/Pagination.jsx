import React from 'react'
import "../styles/pagination.css"

function Pagination({allrecipes,recipeNum,paginado}) {

    const pageNum=[]
  if(allrecipes>9){
      for(var i=1;i<= Math.ceil(allrecipes/recipeNum);i++){
          pageNum.push(i)
      }
  }
    return (
        
            <div className='pages'>
                {
                    pageNum &&
                    pageNum.map(e =>
                        <div className="pagesNum" key={e}>
                            <button className="pagesButtom" onClick={()=>paginado(e)}>{e}</button>
                        </div>)
                }
            </div>
            
        
    )
}

export default Pagination
