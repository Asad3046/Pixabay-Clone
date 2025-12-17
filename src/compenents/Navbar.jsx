import { useContext } from "react";
import PixabayContext from "../context/pixabayContext";

const Navbar = () => {
    const { fetchImageByCategory, setQuery } = useContext(PixabayContext);

    return (
        <>
            <div className="container text-center my-3">
                <button type="button" onClick={() => fetchImageByCategory("nature")} className="btn btn-outline-primary mx-3">
                    Nature
                </button>
                <button type="button" onClick={() => fetchImageByCategory("science")} className="btn btn-outline-warning mx-3">
                    Science
                </button>
                <button type="button" onClick={() => fetchImageByCategory("food")} className="btn btn-outline-success mx-3">
                    Food
                </button>
                <button type="button" onClick={() => fetchImageByCategory("travel")} className="btn btn-outline-danger mx-3">
                    Travel
                </button>
                <button type="button" onClick={() => fetchImageByCategory("sports")} className="btn btn-outline-warning mx-3">
                    Sports
                </button>
                <button type="button" onClick={() => fetchImageByCategory("buildings")} className="btn btn-outline-info mx-3">
                    Buildings
                </button>
                <button type="button" onClick={() => fetchImageByCategory("places")} className="btn btn-outline-light mx-3">
                    Places
                </button>
            </div>

            <div className="container my-5" style={{ width: "700px" }}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} className="form-control bg-dark text-light" />
            </div>
        </>
    );
};

export default Navbar