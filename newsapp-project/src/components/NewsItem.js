import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, time, source} = props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <div>
            <span className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark d-flex justify-content-center">Read More</a>
                <div className="card-footer my-2">
                  <small className="text-body-secondary">By {author} on {time}</small>
                </div>            
              </div>
        </div>
      </div>
    )
}
export default NewsItem
