import React, { useCallback } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button } from "@mui/material";

const DropzoneArea = () => {
  const [imgs, setImgs] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImgs((prevImgs) => [...prevImgs, file]);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const handleClose = (index) => {
    setImgs((prevImgs) => {
      return prevImgs.filter((_, i) => i !== index);
    });
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
    },
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const files = imgs.map((file, index) => {
    const imgUrl = URL.createObjectURL(file);
    return (
      <li key={file.path} style={{ color: "White" }}>
        {/* Added image instead of files name */}
        
        <img src={imgUrl} style={{ width: "150px", height: "150px" }} />
      
        {file.path} - {file.size} bytes
        <Button onClick={() => handleClose(index)} style={{ color: "red" }}>
          Close
        </Button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      <center>
      <h1 style={{ color: "red", width: "50%", textAlign: "center" }}>
    Brain Tumor Detection
  </h1>
      </center>
      <div
        {...getRootProps({
          className: "dropzone",
          style: { marginLeft: "65px" },
          backgroundColor: "#c2072a" ,
        })}
        className=""
      >
        <Box
          sx={{
            maxWidth: "800px",
            width: "200%",
            height: "250px",
            p: 5,
            border: "2px sky blue",
            borderRadius: "10px",
            marginLeft: "220px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <input
            {...getInputProps()}
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
          />
          <p
            className="text-padding"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            <center>Drag and Drop Your MRI Scans Here</center>
          </p>
          <em
            style={{ fontSize: "18px", color: "sky blue" }}
            className="mb-2"
          >
            <center>(Only *.jpeg and *.png images will be accepted)</center>
          </em>
          <div className="file-input">

        <button type="button" onClick={open}>
          Open File
        </button>
      </div>
      </Box>
    </div>
    <div>
      <Box
        sx={{
          p: 5,
          border: "2px sky blue",
          borderRadius: "10px",
        }}
      >
        <h4 style={{ fontSize: "18px", fontWeight: "bold" }}><h2 style={{ color: "#33FFF9 " }}>Files:</h2></h4>
        <ul>{files}</ul>
      </Box>
    </div>
      <div className="mt-2">
        <Button variant="contained" color="primary">
          Process Files
        </Button>
      </div>
    </div>
  );
};

export default DropzoneArea;