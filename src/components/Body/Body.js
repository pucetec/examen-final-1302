import Arm from "../Arm/Arm";
import { useAuthContext } from "../../contexts/AuthContext";
const Body = () => {
  const { loggedIn } = useAuthContext();
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        display: "flex",
        height: "100px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      Está logueado? {loggedIn}
      <Arm side={"left"} />
      <Arm side={"right"} />
    </div>
  );
};

export default Body;
