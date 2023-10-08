import React from 'react'

const NewsItem =(props)=> {
    let { title, description, imageUrl, NewsUrl, date, Author, source } = props
    return (
      <div className='my-3' >
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
            <span className="badge rounded-pill bg-primary">
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            {/* <p className="card-text">Date: {date}</p> */}
            <p className="card-text"><small className="text-muted">By {!Author ? "unknown" : Author} on {new Date(date).toUTCString()}</small></p>
            <a href={NewsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div >
    )
}

export default NewsItem