import React from "react";
import { useParams } from "react-router-dom"

function MovieShow({ movies }) {
    // Call useParams to access the 'params' from the URL
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h3>{movies[params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow;