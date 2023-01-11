import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  //const inputRef = useRef();

  //Comportements
  const handleDelete = (id) => {
    //1 Copie du state
    //const fruitsCopy = fruits.slice();
    const fruitsCopy = [...fruits]; //2eme méthode pour copier le tableau

    //2 Manipulation
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3 Modification avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1 Copie du state
    const fruitsCopy = [...fruits];
    //2 Manipulation
    fruitsCopy.push(fruitAAjouter);
    //3 Modification avec le setter
    setFruits(fruitsCopy);
  };

  const afficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruit: ${fruitNom}`);
  };

  // Render
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => afficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;
