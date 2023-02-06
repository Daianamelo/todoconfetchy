import React, { useState } from "react";


const Home = () => {
  //Inicialización del estado para el valor del input
  const [taskInput, setTaskInput] = useState("");
  //Inicialización del estado para la lista de tareas
  const [tasks, setTasks] = useState([]);
//Función para manejar los cambios en el valor del input
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  //Función para agregar una nueva tarea a la lista
  const addTask = (e) => {
    e.preventDefault();
    setTasks(tasks.concat(taskInput));
    setTaskInput("");
  };

//Función para crear un usuario en la API
const createUser = () => {
  fetch(`https://assets.breatheco.de/apis/fake/todos/user/esposadesuga`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([])
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
};


//Función para obtener la lista de tareas desde la API
const getTodoList = () => {
  fetch(`https://assets.breatheco.de/apis/fake/todos/user/esposadesuga`, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) => setTasks(data));
};


//Función para actualizar la lista de tareas desde la API


  function updateTasks(){
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/esposadesuga`,
		{method: 'PUT', 
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(list)
	  })
		.then((response)=>response.json())
		.then((data)=>console.log(data))
	}

//para borrar las en la api
function deleteTasks(){
  fetch(`https://assets.breatheco.de/apis/fake/todos/user/esposadesuga`,
  {method: 'DELETE', 
  headers: {
    'Content-Type': 'application/json'}
  })
  .then((response)=>response.json())
  .then((data)=>{
    console.log(data.result)
    if (data.result === "ok"){
      setTasks([])
    }
  })
  
}


  return (
    <>
      <form className="container" onSubmit={addTask}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            To do's
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleTaskInput}
            value={taskInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div id="contenedorData" className="text-light">
          {tasks.map((item, index) => (
            <div
              className="row d-flex m-2"
              style={{ borderRadius: "20px", backgroundColor: "rgb(182, 0, 0)" }}
            >
              <div className="col-6">
                <h5 className="m-2">{item}</h5>
              </div>
              <div className="col-6 text-end">
                <i
                  className="fas fa-trash-alt align-items-end m-2 pt-1"
                  onClick={() =>
                    setTasks(tasks.filter((element, currentIndex) => index !== currentIndex))
                  }
                ></i>
              </div>
            </div>
          ))}
        </div>
      </form>
      <div></div>
    </>
  );
};

export default Home;
