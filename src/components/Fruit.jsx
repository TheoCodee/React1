export default function Fruit({ fruitInfo, onClick }) {
  //ci dessus on assigne les props au nom en mettant {fruitInfo, onFruitDelete} au lieu de props

  //state
  //1ere maniere de donner les props
  //const fruitInfo = props.fruitInfo;
  //const onFruitDelete = props.onFruitDelete;

  //2eme manière de donner les props
  //const {fruitInfo, onFruitDelete} = props;

  //Comportements

  //render

  return (
    <li>
      {fruitInfo.nom}
      <button onClick={onClick}>X</button>
    </li>
  );
}
