// ModelList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ModelList = ({ modeluid }) => {
  const [modelImgs, setModelImgs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    // modeluid = "aiwaonly";
    modeluid = "jia_lissa"
    axios
      .get(`http://localhost:5000/models/${modeluid}`)
      .then((response) => {
        setModelImgs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      });
  }, [modeluid]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Model Images</h1>
      <ul>
        {modelImgs.map((img) => (
          <li key={img.id}>
            <img src={img.img_link} alt={img.title} height={400} width={400} />
            <p>{img.title}</p>
          </li>
        ))
      }
      </ul>
      { console.log(modelImgs[0])}
    </div>
  );
};

export default ModelList;
