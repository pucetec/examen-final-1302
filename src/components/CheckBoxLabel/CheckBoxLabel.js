import Checkboxes from "../../common/Checkbox/Checkbox";


function CheckBoxLabel ({children}){
  return (
  <div>
    <label>{children}</label>
    <Checkboxes></Checkboxes>
  </div>);

}
export default CheckBoxLabel;