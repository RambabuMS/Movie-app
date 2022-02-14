import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';

export function Rating({ name, img, cast, genre, summary, director, rating,deletebutton,editbutton,id },index) {
  const [dislike, setdislike] = useState(0);
  const [like, setlike] = useState(0);
  const [show, setShow] = useState(false);
  const history= useHistory();
  const styles = {
    color: rating > 8.5 ? "green" : "red"
  };
  return (
    
    <Card sx={{ backgroundColor: "lightblue" }}className="movie-container">
    <CardContent>
        <img src={img} id="res" className="poster" alt="pics" />
        
      <h2>Movie : {name}</h2>
      <div style={{ width: "350px" }}>
        <IconButton color="success" aria-label="toggle-summary" onClick={() => setShow((s) => !s)}>
          {show ?<ExpandLessIcon />:<ExpandMoreIcon />}</IconButton>
       {show ? <div><p><b>Cast :</b> {cast}</p>
      <p><b>Genre :</b> {genre}</p><p><b>Summary :</b>{summary}</p></div> : ""}  
        <IconButton color="primary" variant="outlined" onClick={() => history.push(`/movies/${id}`)}><InfoIcon /></IconButton>
        </div>
        
      <p>Directed by : {director}</p>
      <p style={styles}>IMDB Rating : ⭐{rating}</p>
      </CardContent>
      <CardActions>
      <div className="buton">
        <IconButton
         color="primary" 
         aria-label="like-button"
         onClick={() => setlike(like + 1)}>
         👍{like}
         </IconButton>
        <IconButton
         color="error"
         aria-label="dislike-button"
          onClick={() => setdislike(dislike + 1)}>
          👎{dislike}
          </IconButton>
        {editbutton}{deletebutton}
      </div>
      </CardActions>
    </Card>
    
  );
}
