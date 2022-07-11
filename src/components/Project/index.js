import data from './data.json';
import Card from '../Card';

function Project() {
    const card = data.map(item => {
        return (   
            <Card
            key={item.id}
            {...item}
            ></Card>
        )
    })
    return (
        <div className="cardContainer">
            {card}
        </div>
    )
}

export default Project;