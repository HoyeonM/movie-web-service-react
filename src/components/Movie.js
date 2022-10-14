import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import moviestyles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
//movie component will receive all props from parent component
    return  (
      <div className = {moviestyles.moviebox}>
        <div className={moviestyles.container}>
        <Link to= {`/movie/${id}`} className = {moviestyles.imglink}>
          <img className = {moviestyles.movieImg} src={coverImg} alt={title}/>
          <div className={moviestyles.middle}>
            <div className={moviestyles.imgtext}>CLICK</div>
          </div> 
        </Link>
        <h2>
          <Link to= {`/movie/${id}`} className={moviestyles.movietitle}>{title}</Link>
        </h2>
        <p className={moviestyles.summary}>{summary.length > 100 ? `${summary.slice(0,100)}...`: summary}</p>
        </div>
        <ul>
        {genres.map((g) => (
        <li key={g}>{g}</li>
        ))}
        </ul>
      </div>
      )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;