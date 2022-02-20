function App() {
  return(
   <div>
     <p>
         Calculadora
      </p>
     <form onSubmit={presion}>
       <p>
         <input type="number" name="valor1" placeholder='Ingrese primer valor'></input>
       </p>
       <p>
         <input type="number" name="valor2" placeholder='Ingrese segundo valor'></input>
       </p>
       <p>
         selecione la opereacion deceada
       </p>
       <select name="operacion"> 
        <option value="sumar">Sumar</option>
        <option value="restar">Restar</option>
        <option value="multiplicar">Multiplicar</option>
        <option value="dividir">Dividir</option>
        <option value="potencia">Potencia</option>
      </select>
       <p>
         <input type="submit" name="Sumar" value="Calcular" ></input>
       </p>
     </form>
   </div>
);
}

function presion(e){
  e.preventDefault();
  const v1=parseInt(e.target.valor1.value)
  const v2=parseInt(e.target.valor2.value)
  switch(e.target.operacion.value) {
    case "sumar":
      const suma=v1+v2
      alert('La suma es '+suma)
      break;
    case "restar":
      const restar=v1-v2
      alert('La resta es '+restar)
      break;
    case "multiplicar":
      const multiplicar=v1*v2
      alert('La multiplicar es '+multiplicar)
      break;
    case "dividir":
      const dividir=v1/v2
      alert('La divicion es '+dividir)
      break;
    case "potencia":
      const potencia= Math.pow(v1,v2)
      alert('La potencia es '+potencia)
      break;
  }
}

export default App;
