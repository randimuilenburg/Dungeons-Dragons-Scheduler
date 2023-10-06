import React, { useState } from "react";

function ImageUpdate() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle the form submission and API request here
  const handleUpdate = async () => {
    const response = await fetch("/api/update_image", {
      method: "PUT",
      body: JSON.stringify({ image }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle the response from the server
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <input
        type="file"
        accept="./Images/Barb.jpg"
        onChange={handleImageChange}
      />
      {/* <button onClick={handleUpdate}>Update Image</button> */}
    </div>
  );
}

export default ImageUpdate;
