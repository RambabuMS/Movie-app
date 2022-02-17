import "./App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Newcolor } from "./Newcolor";
import { TicTacToe } from "./TicTacToe";
import { Switch, Route,Redirect } from "react-router-dom";
import { Movielist } from "./Movielist";
import { Homepage } from "./Homepage";
import { NotFound } from "./NotFound";
import { Addmovie } from "./Addmovie";
import { Moviedetails } from "./Moviedetails";
import { Updatemovie } from "./Updatemovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function App() {
//  const [movielist,setMovielist]=useState(INITIAL_MOVIE_LIST);

  const history= useHistory();
   
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
     <Paper style={{borderRadius: "0px" , minHeight: "100vh"}} elevation={4}>
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
          <Button
          color="inherit" 
          style={{ marginLeft: "auto" }}
          startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={() => setMode(mode === "light" ? "dark" : "light" )}>
          {mode === "light" ? "dark" : "light" } Mode</Button>
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
        <Addmovie />
        </Route>
        <Route path="/movies/edit/:id">
        <Updatemovie />
        </Route>
        <Route path="/movies/:filmid">
        <Moviedetails />
        </Route>
         <Route path="/movies">
           <Movielist />
        </Route>
        <Route path="/color-game">
        <Newcolor />
        </Route>
        <Route path="/tic-tac-toe">
        <TicTacToe />
        </Route>
        <Route path="**">
        <NotFound />
        </Route>
      </Switch>
      </div>
    </div>
    </Paper>
    </ThemeProvider>

  );
}

