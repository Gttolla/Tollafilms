import React from "react";
import './FeaturedMovie.css'

function FeatureMovie({item}){
    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(http://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div>
                {item.original_name}
            </div>
        </section>
    );
}

export default FeatureMovie;