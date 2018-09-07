import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
      this.setState({
        comics: response.data
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
              return(
                <li className="comic-number-box">
                  <Link to={`/comic/${comic.id}`}>
                    {comic.page_number}
                  </Link>
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