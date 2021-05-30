import "../card-list/card-list.css";
import Card from "../card/Card.component";

const CardListComponent = (props) =>{
    return(
        <div className="card-list">
              {props.monsters.map(monster => <Card key={monster.id} monster = {monster}/>)}
        </div>
    )
}
export default CardListComponent;