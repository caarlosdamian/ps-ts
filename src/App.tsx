import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Saludo } from "./components/Saludo";

function App() {
  const [count, setCount] = useState<number>(0);

  // typo primitivos
  let id: number = 10;
  id = 10;
  let isPublish: boolean = true;
  // type inference
  let company = "Touch Of tech";
  let x: any = "hola";
  x = 3;
  x = true;

  // Array
  const ids: number[] = [10, 12, 14, 14, 14];
  // union
  // const empleado: (string | number | boolean)[]= [1,'Carlos',true];
  const empleado: [number, string, boolean] = [1, "Carlos", true];
  const empleado2: [number, string, boolean][] = [
    [1, "Carlos", true],
    [1, "Carlos", true],
  ];
  const cid: string | number = 10;
  // tumple

  // const  {} = empleado;

  const persona: { id: number; name: string; isMayor: boolean } = {
    id: 1,
    name: "Carlos",
    isMayor: true,
  };

  // type

  type Persona = {
    id: number;
    name: string;
    isMayor: boolean;
  };

  const persona2: Persona = {
    id: 1,
    name: "Carlos",
    isMayor: true,
  };

  interface Personas {
    data: Persona[];
  }

  const Persons: Personas = {
    data: [
      {
        id: 1,
        name: "Carlos",
        isMayor: true,
      },
    ],
  };

  interface Transport {
    nombre: string;
  }

  interface Car extends Transport {
    tyres: number;
  }

  interface Plane extends Transport {
    alas: number;
  }

  type Figura = {
    nombre: string;
  };

  type Cuadrado = Figura & {
    lados: number;
  };

  const cuadrdado: Cuadrado = {
    nombre: "dk",
    lados: 10,
  };

  const aero747: Plane = {
    alas: 10,
    nombre: "boing 747",
  };

  // enum Direcciones { 
  //   up, // 0
  //   down, // 1 
  //   left, // 2
  //   right // 3
  // }

  enum Direcciones { 
    up = 'UP', // 0
    down = 'DOWN', // 1 
    left = 'LEFT', // 2
    right ='RIGHT' // 3
  }

  console.log(Direcciones.down)


  // TYPE ASSERTION 

let ciiid: any = 1;
let costumer = ciiid as number;


// interface Addd {
//   x:number,
//   y:number
// }

const AddNumber = (x:number,y:number):number =>{
  return x + y;
}

const AddNumberTostring = (x:number,y:number):string =>{
  return  (x + y).toString();
}

AddNumber(10,10);

const log = (message:string): void => {
  return console.log(message)
}

log('Hola')
  return (
    <div className="App">
      <Saludo
        nombre="Carlos"
        mensaje="Hola Esto es typescript"
        fecha="6 Febrero"
      />
    </div>
  );
}

export default App;
