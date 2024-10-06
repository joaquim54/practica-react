import { useCounter } from "../hocks/useCounter";

export const ContadorComponent = () => {
  const { contador, incrementar, decrementar, resetear } = useCounter(0);

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button className="btn btn-primary" onClick={() => incrementar()}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => resetear()}>
        Reseteo
      </button>
      <button className="btn btn-warning" onClick={() => decrementar()}>
        -1
      </button>
    </>
  );
};
