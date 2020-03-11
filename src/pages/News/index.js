import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './news.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
        this.loadNews = this.loadNews.bind(this)
    }

    componentDidMount() {
        this.loadNews()
    }

    loadNews() {    

        let url = 'http://localhost:8000/v1/news'
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ news: json.articles })
                console.log(json)
            })
    }
    render() {
        return (
            <>
                <div className="container">
                        <div className="list-news">
                        {this.state.news.map((item) => {
                            return(
                                
                                    <div className='content' key={item.id}>                                    
                                        <img className='img-size' src={item.urlToImage} alt="Cover"/>
                                        <span className='name-title'> {item.title}</span>  
                                        <div className='article' ><span className='name-content'>{item.description}</span></div>                               
                                    </div>                            
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default Home



