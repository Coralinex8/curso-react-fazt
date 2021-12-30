export function Card ({card}){

    const {title,description,done}=card
    return (
        <div className="card-container">
            <h1 className = 'title' >{title}</h1>
            <p className="description">{description}</p>
            <p className="done">{JSON.stringify(done)}</p>           
        </div>
    )
}