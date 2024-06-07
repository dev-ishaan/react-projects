import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsHub`
    }
        
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 9
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    async componentDidMount(){
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(40)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles, 
            loading: false, 
            totalResults: parsedData.totalResults
        })
        this.props.setProgress(100)
    }

    fetchMoreData = async ()=>{
        this.setState({page: this.state.page +1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults})
    }

  render() {
    return (
    <>
        <h1 className="text-center my-4">NewsHub - {this.capitalizeFirstLetter(this.props.category)} Highlights</h1>
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container my-4'>
            <div className='row'>
                {this.state.articles.map((e)=>{
                    return(
                    <div className='col-md-4' style={{marginBottom: "20px"}} key={e.url}>
                    <NewsItem title={e.title?e.title:""} description={e.description?e.description:""} imageUrl={e.urlToImage?e.urlToImage:"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} url={e.url} author={e.author?e.author:"Unknown"} time={new Date(e.publishedAt).toGMTString()} source={e.source.name} />

                    </div>
                )})}
            </div>
        </div>
        </InfiniteScroll>
    </>
    )
  }
}

export default News
