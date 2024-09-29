import React from 'react'
import { useState } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import { useEffect } from 'react';

function Category() {
    const [categoryData, setCategoryData] = useState([]);

    const getData=async ( )=>{
        const result = await loadData()
        if(result){
        let fdata = result.data.filter((e) =>{
            return e
         })
         setCategoryData(fdata);}
    }
  useEffect(()=>{
    getData();
    console.log("data",result)
   

  },[])

  const filterData = (string)=>{
    let fdata = data.filter((e) =>{
      if(e.category==string){
        return e
      }
  
    })
    setCategoryData(fdata);
  }
  return (
    <div>Category
        <div style={{top:80}} className="col-2 sticky-top  h-25 shadow-sm p-3 mb-5 bg-body rounded border-start-0">
          <h4><CategoryIcon />Categories</h4>
          <Category />
           {category.map((e) => 
          <div>
            <span className="border-1 border border-warning bg-bg-warning rounded-4 m-2 text-bg-warning"
             onClick={()=>{
              //colorBlack(e);
              console.log(e);
              filterData(e)
            }}>{e}</span>
            </div>
          )} 
        </div>
    </div>
  )
}

export default Category