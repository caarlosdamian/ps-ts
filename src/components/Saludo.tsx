import React from "react";

interface SaludoProp {
  nombre: string;
  mensaje: string;
  fecha?: string;
}

export const Saludo = ({ mensaje, nombre, fecha }: SaludoProp): JSX.Element => {
  const SayHello = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>{`${nombre}, ${mensaje}`}</h1>
      {fecha && <span>{fecha}</span>}
      <input type="text" name="id" id="" onChange={(e)=>SayHello(e)} />
      <button onClick={(e) => SayHello(e)}>Click</button>
    </div>
  );
};
