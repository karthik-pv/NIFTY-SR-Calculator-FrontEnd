import React from 'react';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    let index = e.target.files.length  
    const file = e.target.files[index-1];
    onFileUpload(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
