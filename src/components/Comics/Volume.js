import React, { Component } from 'react';
import axios from 'axios';

import prolouge from '../../images/prolouge.png';

class Volume extends Component {
  constructor(props){
    super(props);
    this.state = {
      comics: []
    }
  }

  componentDidMount(){
    axios.get(`/api/comicnumbers/${this.props.number}`)
    .then(response => {
      let ordered = response.data
        .sort(function(a, b) {
          return a.pageorder > b.pageorder ? 1 : b.pageorder > a.pageorder ? -1 : 0;
        })
      console.log(response, "this is the response")
      this.setState({
        comics: ordered
      })

    }
    );
  }

  // f1 is id
  // f5 is page order
  // f6 is page number
  // f12 is volume id

  render() {
    return (
      <div className="volume-container">
        <div className="volume-image">
          <img src={prolouge} alt="comic" />
        </div>
        <div className="comic-numbers-container">
          <ul>
            {this.state.comics.map( (comic, index) => {
              console.log(this.state.comics, "********************comics", this.props.number)
              return(
                <li className="comic-number-box">
                  {comic.page_number} - {comic.pageorder}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Volume;