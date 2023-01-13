import React, {useState} from "react";//importo react y el hook useState



//create your first component
const Home = () => {

	//declaro los estados//
	const[pendientes,setPendientes]=useState("")//1. creamos un estado del input pendientes
        //[espacio donde guardo los valores,funcion que actualiza los valores]
	//creo funcion para ejecutar la actualizacion del valor inicial



	function handlePendientes (e) {
		//console.log(e.target.value)//para poder ver el valor del target en el que esta posicionado
		setPendientes(e.target.value) 
	}


	function enviarPendientes (e){
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo

	} 
	console.log(pendientes);

	return (
		<>
<form className="container" onSubmit={enviarPendientes}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">to do's</label>
    {/*2. definimos el evento ochange en el input */}
	<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handlePendientes}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<div>
	
</div>

<ul>
<li> {pendientes.map((item, index)=><li key={item.id}>{item.name}<button onClick={() => handlePendientes(index)}>x</button></li>)}</li>
</ul>

</>
	);
};

export default Home;
