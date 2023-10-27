import "./Card.css"


function Card({ price = '0€', title = 'titulo por defecto', description = 'descripcion por defecto'}) {
    return (
        <div className="Card">
            <img src="" alt="" />
            <h1>{price}</h1>
            <h2>{title} </h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;