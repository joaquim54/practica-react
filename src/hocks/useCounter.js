import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [contador, setContador] = useState(initialValue);

  const incrementar = (value = 1) => {
    setContador(contador + value);
  };

  const decrementar = (value = 1, negative = false) => {
    if (!negative && contador - value < 0) {
      setContador(0);
      alert("No se puede decrementar más");
      return;
    }
    setContador(contador - value);
  };

  const resetear = () => {
    setContador(initialValue);
  };

  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  };
};
