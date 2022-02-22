import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Newcolor() {
  const [color, setColor] = useState("red");
  const styles = {
    backgroundColor: color,
    width: "300px",
  };
  const [Colorlist, setColorlist] = useState([
    "pink",
    "blue",
    "yellow",
    "purple",
  ]);
  return (
    <div className="color-box">
      <h1>Color-Game</h1>
      <TextField
        style={styles}
        variant="outlined"
        margin="dense"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => setColorlist([...Colorlist, color])}
      >
        Add color
      </Button>
      {Colorlist.map((ch, index) => (
        <Colorbox color={ch} key={index} />
      ))}
    </div>
  );
}
function Colorbox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "60px",
    width: "300px",
    marginTop: "20px",
  };
  return <div className="Colorbox" style={styles}></div>;
}
