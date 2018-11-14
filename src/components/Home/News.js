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
    axios.get("/api/latestnews")
    .then(response => 
      this.setState({
        news: response.data
      })
    );
  }

  render() {
    console.log(this.state.news, "NEWS")
    return (
      <div className="news-container">
        {this.state.news.map( (article, index) => {
          return(
          <div key={index}>
            <p>{article.news_header}</p>
          </div>
          )
        })}
      </div>
    );
  }
}

export default News;