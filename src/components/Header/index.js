import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import './header.css'

class Header extends Component {
  constructor(props){
    super(props)
    this.state =  {
    description: '',
    news: []
    }    
  }


  handleOnChange = e => {
    this.setState({ description: e.target.value });
    };

componentDidMount() {
  this.loadNews()
}

loadNews() {    

      this.makeApiCall = searchInput => {
        let searchUrl = `http://localhost:8000/V1/news?q=${searchInput}`
        fetch(searchUrl)
        .then(response => {
        return response.json();
        })
        .then(jsonData => {
          this.setState({ news: jsonData.news });
        });
        };
}

  
handleSearch = () => {
  this.makeApiCall(this.state.description);
  };


  render(){
    
    return (
      <div className="header">
                <input className='control-search' placeholder='' value={this.state.description} onChange={e => this.handleOnChange(e)}></input>               
                                          
                <Link onClick={this.handleSearch}>Search </Link>

                {this.state.news ? (
                <div>
                {this.state.news.map((n, index) => (
                <div key={index}>
                <h1>{n.title}</h1>
                <h2>{n.description}</h2>
                <img src={n.urlToImage} alt="img-thumbnail" />
                </div>
                ))}
                </div>
                ) : (
                <p style={{'color': '#666'}}>Try searching for a news</p>
                )}
       </div>
    );
  }
}
export default Header
