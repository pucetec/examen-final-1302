import TextField from '@mui/material/TextField';

function Input({value}) {
  return (
  <TextField label={"nombre"} variant="outlined" value={value}/>
  );
}
export default Input;