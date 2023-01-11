import { useState } from "react";
export default function FruitForm({ handleAdd }) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");

  //Comportements

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    //1 Copie du state
    //const fruitsCopy = [...fruits];

    //2 Manipulation
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    //fruitsCopy.push(fruitAAjouter);
    handleAdd(fruitAAjouter);
    //3 Modification avec le setter
    //setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    // const valueAfterChange = event.target.value;
    // setNouveauFruit(valueAfterChange);
    // Se traduit en
    setNouveauFruit(event.target.value);
  };

  //render

  return (
    <form action="Submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit"
        onChange={handleChange}
      />
      <button>Ajouter +</button>
    </form>
  );
}
