import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from "react-router-dom";


export function Moviedetails({ movielist }) {
  const { filmid } = useParams();
  console.log(filmid, movielist);
  const movie = movielist[filmid];
  const history= useHistory();
  return (
    <div>
      <iframe width="100%" height="700" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-container">
        <h2>Movie : {movie.name}</h2>
        <p><b>Cast :</b> {movie.cast}</p>
        <p><b>Summary:</b>{movie.summary}</p>
        <Button onClick={() => {
                history.goBack();
        }}
          variant="contained" startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
