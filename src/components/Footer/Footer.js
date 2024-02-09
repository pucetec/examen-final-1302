const Footer = ({ doesItHurt }) => {
  return (
    <div
      style={{
        width: "20%",
        margin: "auto",
        display: "block",
        height: "100px",
        backgroundColor: "yellow",
      }}
    >
      Mis Pies duelen? {doesItHurt}
    </div>
  );
};

export default Footer;
