import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
        
     const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () =>{
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews()
        document.title = `${capitalizeFirstLetter(props.category)} - NewsHub`
      }, []);

    const fetchMoreData = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    return (
    <>
        <h1 className="text-center" style={{marginTop:'90px'}}>NewsHub - {capitalizeFirstLetter(props.category)} Highlights</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className='container my-4'>
            <div className='row'>
                {articles.map((e)=>{
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

export default News

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 9
}

 News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}