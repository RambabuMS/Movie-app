import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";

export function Updatemovie({ movielist, setMovielist }) {
  const { id } = useParams();
  console.log(id, movielist);
  const movie = movielist[id];
  const [Name, setName] = useState(movie.name);
  const [post, setPost] = useState(movie.img);
  const [cost, setCost] = useState(movie.cast);
  const [gen, setGen] = useState(movie.genre);
  const [sam, setSam] = useState(movie.summary);
  const [direct, setDirect] = useState(movie.director);
  const [rate, setRate] = useState(movie.rating);
  const [trail, setTrail] = useState(movie.trailer);
  const history = useHistory();


  return (
    <div className="input">
      <h1>Here you can Edit your favourite movies</h1>
      <TextField className="text" label="Movie Name" variant="outlined"
        margin="dense" value={Name}
        onChange={(event) => setName(event.target.value)} />
      <TextField className="text" label="Poster link" variant="outlined"
        margin="dense" value={post}
        onChange={(event) => setPost(event.target.value)} />
      <TextField className="text" label="Cast" variant="outlined"
        margin="dense" value={cost}
        onChange={(event) => setCost(event.target.value)} />
      <TextField className="text" label="Genre" variant="outlined"
        margin="dense" value={gen}
        onChange={(event) => setGen(event.target.value)} />
      <TextField className="text" label="Summary" variant="outlined"
        margin="dense" value={sam}
        onChange={(event) => setSam(event.target.value)} />
      <TextField className="text" label="Director Name" variant="outlined"
        margin="dense" value={direct}
        onChange={(event) => setDirect(event.target.value)} />
      <TextField className="text" label="Rating" variant="outlined"
        margin="dense" value={rate}
        onChange={(event) => setRate(event.target.value)} />
      <TextField className="text" label="Trailer" variant="outlined"
        margin="dense" value={trail}
        onChange={(event) => setTrail(event.target.value)} />
      <Button variant="contained"
        onClick={() => {
          const UpdatedMovie = {
            name: Name,
            img: post,
            cast: cost,
            genre: gen,
            summary: sam,
            director: direct,
            rating: rate,
            trailer: trail
          };
          const copymovielist = [...movielist];
          copymovielist[id] = UpdatedMovie;
          setMovielist(copymovielist);
          history.push("/movies");
        }}
      >Update Movie</Button>
    </div>
  );
}
