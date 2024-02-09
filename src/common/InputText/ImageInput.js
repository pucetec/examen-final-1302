import React from "react";
import { useFormContext } from "../../context/Form";

const ImageInput = ({ placeholder }) => {
  const { image, handleNewImage } = useFormContext();
  return (
    <div>
      <input
        placeholder={placeholder}
        value={image}
        onChange={handleNewImage}
      ></input>
    </div>
  );
};

export default ImageInput;
