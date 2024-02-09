import React from "react";

const CustomImage = ({ src, alt, width, height }) => {
  const styles = {
    width: width || "auto",
    height: height || "auto",
  };

  return <img src={src} alt={alt} style={styles} />;
};

export default CustomImage;
