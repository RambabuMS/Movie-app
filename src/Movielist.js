import { Rating } from "./Rating";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";


export function Movielist({ movielist,setMovielist }) {
   const history= useHistory();
  return (
    <div className="movie">
      {movielist.map(( prop, index) => (
        <Rating
          {...prop}
          deletebutton={<IconButton color="error" onClick={()=>{
                       const copylist=[...movielist];
                       copylist.splice(index,1);
                       setMovielist(copylist);
          }} aria-label="delete" size="large">
<DeleteIcon />
</IconButton>}
         editbutton={<IconButton color="secondary" onClick={()=>history.push(`/movies/edit/${index}`)}
         aria-label="edit" size = "medium">
<EditIcon />
</IconButton>
         }
         id={index}
          
           />

      ))}
    </div>
  );
}
