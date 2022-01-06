import React from 'react'

function Pagination({allrecipes,recipeNum,paginado}) {

    const pageNum=[]

    for(var i=1;i<= Math.ceil(allrecipes/recipeNum);i++){
        pageNum.push(i)
    }
    return (
        <nav>
            <ul>
                {
                    pageNum &&
                    pageNum.map(e =>
                        <li key={e}>
                            <button onClick={()=>paginado(e)}>{e}</button>
                        </li>)
                }
            </ul>
            
        </nav>
    )
}

export default Pagination
