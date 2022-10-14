import PropTypes from "prop-types";

function MovieDetail({rating, runtime, coverImg, title, description_full, genres}){
    return(
        <div>
            <img src={coverImg} alt={title} />
            <div>
            <h3>
              {title}
            </h3>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            {
              genres ?
                // genre is the 'array'
                <div>
                  <b>{'genres'}</b>
                  <ul>{genres.map(g => 
                  <li key={g}>{g}</li>
                  )}
                  </ul>
                </div>
                : null
            }
            {
                description_full ?
                <div>
                <p>{description_full}</p>
                </div>
                : null
            }
          </div>
        </div>
    )
}


MovieDetail.prototypes = {
    rating: PropTypes.number,
    runtime: PropTypes.number,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description_full: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  
export default MovieDetail;