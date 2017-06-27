import { ImagePicker } from 'antd-mobile';
import React, { Component } from 'react';

const data = [];

class ImageUpload extends Component{
  state = {
    files: data,
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  };
  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 2}
        />
      </div>
    );
  }
}

export default ImageUpload;
