import { Rating } from "./Rating";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";
import { API } from './global'
 
 
 
  
export function Movielist() {
   const history= useHistory();

   const [movielist,setMovielist] = useState([]);

   const getMovies = () => {
    fetch(`${API}/movies`,{
      method : "GET",})//promise
    .then((data)=> data.json())//Response Object
    .then((mvs)=> setMovielist(mvs));
   }

   useEffect(() => getMovies(), [])

   //delete the movie and refresh the data(movies)
  const deleteMovie= (id) => {
    fetch(`${API}/movies/${id}`,{
      method : "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div className="movie">
      {movielist.map(( {name,id,img,cast,genre,summary,director,rating}, index) => (
        <Rating
          //{...prop}
          key={index}
          name={name}
          img={img}
          cast={cast}
          genre={genre}
          summary={summary}
          director={director}
          rating={rating}
          deletebutton={
                      <IconButton 
                       style={{marginLeft:"auto"}}
                       onClick={(id)=> deleteMovie(id) } color="error" 
           aria-label="delete" size="medium">
<DeleteIcon />
</IconButton>}
         editbutton={<IconButton  color="secondary" onClick={()=>history.push(`/movies/edit/${id}`)}
         aria-label="edit" size = "medium">
<EditIcon />
</IconButton>
         }
         id={id}
          
           />

      ))}
    </div>
  );
}

// const copylist=[...movielist];
//                        copylist.splice(index,1);
//                        setMovielist(copylist);
          