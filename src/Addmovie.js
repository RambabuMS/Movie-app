import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function Addmovie({ movielist, setMovielist }) {

  const [Name, setName] = useState('');
  const [post, setPost] = useState('');
  const [cost, setCost] = useState('');
  const [gen, setGen] = useState('');
  const [sam, setSam] = useState('');
  const [direct, setDirect] = useState('');
  const [rate, setRate] = useState('');
  const [trail, setTrail] = useState('');
  const history= useHistory();


  return (
    <div className="input">
            <h1>Here you can add your favourite movies</h1>
      <TextField className="text" label="Movie Name" variant="outlined" margin="dense"
        onChange={(event) => setName(event.target.value)} />
      <TextField className="text"  label="Poster link" variant="outlined" margin="dense"
        onChange={(event) => setPost(event.target.value)} />
      <TextField className="text" label="Cast" variant="outlined" margin="dense"
        onChange={(event) => setCost(event.target.value)} />
      <TextField className="text" label="Genre" variant="outlined" margin="dense"
        onChange={(event) => setGen(event.target.value)} />
      <TextField className="text" label="Summary" variant="outlined" margin="dense"
        onChange={(event) => setSam(event.target.value)} />
      <TextField className="text" label="Director Name" variant="outlined" margin="dense"
        onChange={(event) => setDirect(event.target.value)} />
      <TextField className="text" label="Rating" variant="outlined" margin="dense"
        onChange={(event) => setRate(event.target.value)} />
        <TextField className="text" label="Trailer" variant="outlined" margin="dense"
        onChange={(event) => setTrail(event.target.value)} />
      <Button variant="contained"
        onClick={() => {
          const newMovie = {
            name: Name,
            img: post,
            cast: cost,
            genre: gen,
            summary: sam,
            director: direct,
            rating: rate,
            trailer:trail
          };
          setMovielist([...movielist, newMovie]);
          history.push("/movies");
        }}
      >Add Movie</Button>
    </div>
  );
}
