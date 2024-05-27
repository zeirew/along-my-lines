import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './drop-zone.css';
import { FaFileUpload } from 'react-icons/fa';

function DropZone() {
  const [buttonName, setButtonName] = useState('Click to select file');

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setButtonName('Confirm upload');
    }
  }, []);

  const onClick = () => {
    if (buttonName == 'Click to select file') {
      open();
    } else {
      console.log(typeof files[0]);
      console.log(files);
    }
  };

  const { getRootProps, getInputProps, open, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      noClick: true,
      multiple: false,
      accept: { 'application/pdf': ['.pdf'] }
    });

  const files = acceptedFiles.map((file: File) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <FaFileUpload color="#004c4c" size={70} />
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the pdf file here</p>
        ) : (
          <p className="dropzone-content">
            Drag a pdf file here or click to open file browser
          </p>
        )}
        <button type="button" onClick={onClick} className="btn">
          {buttonName}
        </button>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
    </div>
  );
}

export default DropZone;
