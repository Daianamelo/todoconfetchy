import React, {useState, useEffect} from "react";//importo react y el hook useState



//create your first component
const Home = () => {



  //Haz que tu TODO List se sincronice con la API de backend cada vez que se agregue o elimine una tarea.




	//declaro los estados//
	const[pendientes,setPendientes]=useState("")//1. creamos un estado del input pendientes
        //[espacio donde guardo los valores,funcion que actualiza los valores]
	//creo funcion para ejecutar la actualizacion del valor inicial

	const [data, setData] = useState([]); // 2. creamos un estado de lo que se guarda en el array


	function handlePendientes (e) {
		//console.log(e.target.value)//para poder ver el valor del target en el que esta posicionado
		setPendientes(e.target.value) 
	}


	function enviarPendientes (e){
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
		setData(data.concat(pendientes))
    setPendientes("");

	} 
	console.log(pendientes);

  function crearUsuario(){
    fetch("https://assets.breatheco.de/apis/fake/todos/user/esposadesuga",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([])
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
  }

  function obtenerTodoList (){
    fetch("https://assets.breatheco.de/apis/fake/todos/user/esposadesuga",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
  }
  function update(){
    fetch("https://assets.breatheco.de/apis/fake/todos/user/esposadesuga",{
      method: "PUT",//ACTUALIZA
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response)=>response.json())
    .then((data)=>console.log(data))
  }
  console.log(update())

  function eliminarTodoses() {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/esposadesuga",{
      method: "DELETE",//ACTUALIZA
      headers: {
        "Content-Type": "application/json"
      }
  }) .then((response)=>response.json())
  .then((data)=>{console.log(data.result)
    if (data.result==="ok"){
      setData([])
    }
  });

	// eliminar item en array
	const deleteItem = (id) => {
		setData(data.filter((item, index) => {
		  return index != id;
		}))
	  }

	  //el array
	  const listItems = data.map((item, index) =>
  <li>{item} <button onClick={() => remove(index)}>
  </button>X</li>
  );

//para hacer el fetch
useEffect (()=>{
  crearUsuario();
  obtenerTodoList();
  update();
},[])


	return (
		<>
<form className="container" onSubmit={enviarPendientes}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">to do's</label>
    {/*2. definimos el evento ochange en el input */}
	<input type="text" className="form-control" onChange={handlePendientes} value={pendientes}/>
  </div>
  <button type="submit" onClick={enviarPendientes} className="btn btn-primary">Submit</button>
  <div id="contenedorData" className="text-light">
                        {
                        data.map((item, index) => (
                            <div className="row d-flex m-2"  style={{borderRadius:"20px",backgroundColor: "rgb(182, 0, 0)"}}>
                                <div className="col-6">
                                    <h5 className="m-2">{item}</h5>
                                </div>
                                <div className="col-6 text-end">
                                    <i className="fas fa-trash-alt align-items-end m-2 pt-1"
                                        onClick={
                                            () => setData(data.filter((elementoDiv, currentIndex) => index != currentIndex))
                                    }></i>
                                </div>
                            </div>
                        ))
                    } </div>
  
</form>
<div>
	
</div>


</>
	);
};

export default Home;
