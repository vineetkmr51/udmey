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
      <div className="row pt-4">
        {test.map((item) => {
          return (
            <div className="col-md-3">
              <div className="card mb-4">
                <div className="card-body">
                  <p className="card-title">{item.id}</p>
                  {item.image ? <p>Api Image</p> : <p>Placehoder image</p>}
                  <h5 className="card-title">{item.title}</h5>
                  {item.completed === true ? (
                    <p>True Data</p>
                  ) : (
                    <p>False Data</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
