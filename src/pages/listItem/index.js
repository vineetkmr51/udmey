import { useEffect, useState } from 'react';
function List() {

  const[test, setTest] = useState([{name:"default"}])
  useEffect(() => {
    apifunc()
  }, [])

  async function apifunc(){
      let apiData = await fetch('https://jsonplaceholder.typicode.com/users')
      let apijson = await apiData.json()
      setTest(apijson)
  }
  return (
    <div>
      
      {
        test.map((item) => {
          return(
            <div>
              {item.name}
            </div>
          )
        })
      }



    </div>
  );
}

export default List;