import { useEffect, useState } from "react";
function List() {
  const [test, setTest] = useState([
    { title: "default", id: "testId", completed: "cs" },
  ]);
  useEffect(() => {
    apifunc();
  }, []);

  async function apifunc() {
    let apiData = await fetch("https://jsonplaceholder.typicode.com/todos/");
    let apijson = await apiData.json();
    setTest(apijson);
  }
  return (
    <div className="container">
      {test.map((item) => {
        return (
          <div className="card mb-4">
            <div className="card-body">
              <p className="card-title">{item.id}</p>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.completed}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
