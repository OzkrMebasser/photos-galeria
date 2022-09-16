import React from "react";
import { FcLike } from "react-icons/fc";

class Image extends React.Component {
  render() {
    return (
      <>
        {/* <img src={this.props.src} alt={this.props.alt_description}/> */}
       
        
        <div className="container-glass">
          <img
            className="img"
            src={this.props.src}
            alt={this.props.alt_description}
          />
          <span >
          
          {/* <p class="text"> Description {this.props.name ? this.props.name : "No info!"} </p> */}
          <p className="text">Photographer: <br />{this.props.user ? this.props.user : "No info!"} </p>
          <p className="text"> <FcLike/> {this.props.likes} </p>
          {/* <p className="text">{this.props.alt_description}</p> */}
          </span>
        </div>
      </>
    );
  }
}

export default Image;
