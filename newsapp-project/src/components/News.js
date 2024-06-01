import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dde03b8c705e421da41e78ea7bd0e32c"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, loading: true})
    }

  render() {
    return (
        <>
        <h2 style={{textAlign: "center", margin:"5px"}}>NewsHub - Highlights</h2>
        <div className='container my-4'>
            <div className='row'>
                {this.state.articles.map((e)=>{
                    return(
                    <div className='col-md-4' style={{marginBottom: "20px"}} key={e.url}>
                    <NewsItem title={e.title?e.title:""} description={e.description?e.description:""} imageUrl={e.urlToImage?e.urlToImage:"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} url={e.url}/>
                </div>
                )})}
                
            </div>
      </div>
      </>
    )
  }
}

export default News
