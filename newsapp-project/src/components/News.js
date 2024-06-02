import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 9
    }

    static PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dde03b8c705e421da41e78ea7bd0e32c&page=${this.state.page}&pageSize=${this.props.pageSize}`

        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles, 
            loading: false, 
            totalResults: parsedData.totalResults})
    }

    handlePrv = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dde03b8c705e421da41e78ea7bd0e32c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles, 
            loading: false
        })
    }
    
    handleNext = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dde03b8c705e421da41e78ea7bd0e32c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles, 
                loading: false
            })
        }
    }
  render() {
    return (
    <>
        <h1 className="text-center my-4">NewsHub - Highlights</h1>
        {this.state.loading && <Spinner/>}
        <div className="container d-flex justify-content-between my-5">
            <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrv}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
        {/* <h2 style={{textAlign: "center", margin:"5px"}}>NewsHub - Highlights</h2> */}
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
        <div className="container d-flex justify-content-between my-5">
            <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrv}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
    </>
    )
  }
}

export default News
