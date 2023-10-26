import { useState } from "react"

export default function HornedBeast({title, img, description}) {
    const [likes, setLikes] = useState(0)
    
    function handleLikes() {
        setLikes(likes + 1)
        
    }

    return (
        <div>
            <p>{title} is the child</p> 
            <img src={img} onClick={handleLikes}/>
            {/* <img src={imageUrl} onClick={() => handleShowModal({ title, imageUrl })}
          /> */}
            <span>❤️ {likes}</span>
        </div>
    )
}

// smoe variable, someway to Change the variable 
// let [berries, mushrooms] = useState(0)