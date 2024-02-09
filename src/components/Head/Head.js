import { useAuthContext } from "../../contexts/AuthContext";
const Head = () => {
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "red",
      }}
    >
      <input onChange={(event) => setEmail(event.target.value)} />
    </div>
  );
};

export default Head;
