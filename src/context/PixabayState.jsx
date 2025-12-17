import { useEffect, useState } from 'react';
import PixabayContext from './pixabayContext';

const PixabayState = (props) => {
    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState("london");

    const api_key = "53766989-72b2cce8b81ef226249f66125";

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=50`);
            const data = await api.json();
            console.log(data.hits);
            setImageData(data.hits);
        }
        fetchData();
    }, [query]);

    const fetchImageByCategory = async (cat) => {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true`);
        const data = await api.json();
        setImageData(data.hits);
    };

    return (
        <PixabayContext.Provider value={{ imageData, fetchImageByCategory, setQuery }}>
            {props.children}
        </PixabayContext.Provider>
    );
};

export default PixabayState