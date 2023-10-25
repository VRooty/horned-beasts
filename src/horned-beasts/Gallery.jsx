import beastData from "./DATA"

export default function Gallery() {
    console.log(props.beasts)
    return (
        <>
        {
            beastData.map((beast) => {
                return (
                    <HornedBeast/>
                )
                
            })
        }
    
            <h2>Horned Beasts 😎 🐉 </h2>
            {
                props.beasts.map(beast => {
                    return (
                        <HornedBeast id={beast.id} title={beast.title} img={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns}/>
                    )
                })
            }
            
        </>
    )
}