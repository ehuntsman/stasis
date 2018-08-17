import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount(){
    axios.get("/api/news")
    .then(response => 
      this.setState({
        news: response.data
      })
    );
  }

  render() {
    return (
      <div className="news-container">
        
      </div>
    );
  }
}

export default News;