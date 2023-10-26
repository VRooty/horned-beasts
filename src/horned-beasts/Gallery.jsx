import beastData from "./DATA"
import HornedBeast from "./HornedBeasts"

export default function Gallery() {
    return (
        <>
        <h2>Horned Beasts 😎 🐉 </h2>
        {
            beastData.map((beast) => {
                return (
                    <HornedBeast title={beast.title} img={beast.image_url} description={beast.description}/>
                )
                
            })
        }
    
        </>
    )
}



