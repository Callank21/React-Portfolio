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
        <div>
            <p className="subHead">Portfolio</p>
            <div className="cardContainer">
                {card}
            </div>
        </div>
    )
}

export default Project;