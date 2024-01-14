import React, { useEffect } from "react";
function List() {
  useEffect(()=>{
    fetch("https://jsonlaceholder.typicode.com/todos")
    .then((response) => response)
    .then((e)=> e.json)
    .then(e=>console.log(e));
  },[]);
  return (
    <div>
      
     



    </div>
  );
}

export default List;