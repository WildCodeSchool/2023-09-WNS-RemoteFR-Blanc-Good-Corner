import axios from "axios";
import { useState } from "react";

const UploadPage = () => {
  const [file, setFile] = useState<File>();
  const [imageURL, setImageURL] = useState<string>();
  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault();
        if (file) {
          const url = "http://localhost:8000/upload";
          const formData = new FormData();
          formData.append("file", file, file.name);
          try {
            const response = await axios.post(url, formData);
            console.log(response.data.filename);
            setImageURL(response.data.filename);
          } catch(err) {
            console.log("error", err);
          }
        } else {
          alert("Select a file");
        }
      }}>
        <h1>Upload an image</h1>
        <input type="file" onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }} />
        <button type="submit">Upload</button>
      </form>
      {
        imageURL ? (
          <>
            <img width="500" alt="image uploaded" src={imageURL} />
          </>
        ) : null
      }
    </div>
  )
}

export default UploadPage;