import React, { Component } from 'react';
import axios from 'axios';

export default class UploadImageForm extends Component {
  state = {
    imageFile: null
  };

  onImageChange = (e) => {
    const imageFile = e.target.files[0];

    this.setState(() => ({ imageFile }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append('myImage', this.state.imageFile);

    axios.post(
      '/upload',
      formData, 
      {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    )
      .then((result) => console.log('This file is successfully uploaded \n', result))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="file"
          name="myImage"
          onChange={this.onImageChange} 
        />
        <button>Upload</button>
      </form>
    );
  }
}