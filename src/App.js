import "./App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Newcolor } from "./Newcolor";
import { TicTacToe } from "./TicTacToe";
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { Movielist } from "./Movielist";
import { Homepage } from "./Homepage";
import { NotFound } from "./NotFound";
import { Addmovie } from "./Addmovie";
import { Moviedetails } from "./Moviedetails";
import { Updatemovie } from "./Updatemovie";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  const [movielist,setMovielist]=useState(INITIAL_MOVIE_LIST);

  const history= useHistory();
  return (
    <div className="App">
         
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>
          Home</Button>
          <Button color="inherit" onClick={() => history.push("/movies")}>
          Movies</Button>
          <Button color="inherit" onClick={() => history.push("/movies/add")}>
          Add Movie</Button>
          <Button color="inherit" onClick={() => history.push("/color-game")}>
          Color Game</Button>
          <Button color="inherit" onClick={() => history.push("/tic-tac-toe")}>
          Tic Tac Toe</Button>
        </Toolbar>
      </AppBar>

      <div className="route-container">
      <Switch>
      <Route exact path="/">
          <Homepage />
        </Route>
      <Route path="/films">
          <Redirect to="/movies" />
      </Route>
      <Route path="/movies/add">
        <Addmovie movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="/movies/edit/:id">
        <Updatemovie  movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="/movies/:filmid"><Moviedetails movielist={movielist} /></Route>
         <Route path="/movies">
           <Movielist movielist={movielist} setMovielist={setMovielist}/>
        </Route>
        <Route path="/color-game"><Newcolor /></Route>
        <Route path="/tic-tac-toe"><TicTacToe /></Route>
        <Route path="**"><NotFound /></Route>
      </Switch>
      </div>
    </div>
  );
}


