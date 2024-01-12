import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
const uploadFile = (file, tempName = null) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'mycloud');
    data.append('cloud_name', 'dvokzucfn');
    data.append('folder', 'customerImages'); // Specify the folder name here

    return fetch("https://api.cloudinary.com/v1_1/dvokzucfn/image/upload", {
        method: "post",
        body: data,
        headers: {
            Authorization: "Basic " + btoa("136524125281676:KS-t1HOL950ixzwUcthAJMWf-ps"),
            'Access-Control-Allow-Origin': '*' // Add the CORS header here
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        return data; // You can return the data or handle it as needed
    })
    .catch(error => {
        console.error('Error:', error);
        throw error; // Rethrow the error to propagate it further if needed
    });
};
  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('Please select a file');
        return;
      }

      const uploadResult = await uploadFile(selectedFile);

      // Handle the result as needed
      console.log('Upload Result:', uploadResult);
    } catch (error) {
      // Handle the error
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploadComponent;
