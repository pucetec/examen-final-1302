import React from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';


function App() {

  
  return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </FormControl>
  );
}

export default App;