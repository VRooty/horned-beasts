export default function HornedBeast({title, img, description}) {
    return (
        <>
            <h2>{title}</h2>
            <img src={img}/>
            <p>{description}</p>
            <h2></h2>
        </>
    )
}