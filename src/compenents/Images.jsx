import React, { useContext } from 'react'
import Context from '../context/Context'
import './Image.css'

const Images = () => {
    const { imageData } = useContext(Context);

    return (
        <div className="container my-5">
            <div className="flex">
                {imageData.map((image) => (
                    <div key={image.id}>
                        <div className="item">
                            <img src={image.largeImageURL} alt="img" style={{ width: "280px", }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Images