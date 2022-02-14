import "./App.css";
import { useState } from "react";
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


export default function App() {
  const [movielist,setMovielist]=useState(INITIAL_MOVIE_LIST);
  return (
    <div className="App">
         <div className="links">
         <Link className="link" to="/">Home</Link>
        <Link className="link" to="/movies">Movies</Link>
        <Link className="link" to="/movies/add">Add New Movie</Link>
        <Link className="link" to="/color-game">Color Game</Link>
        <Link className="link" to="/tic-tac-toe">Tic-Tac-Toe Game</Link>   
      </div>
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
  );
}


