import React from 'react'
import news_image from '../assets/news_image.jpg'

const NewsItem = ({title, description, image, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 p-3 text-center" style={{width: "300px", height: ""}}>
        <img src={image?image:news_image} style={{width: "100%", height: "200px", objectFit: "cover"}} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title" style={{
              flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'
            }}>{title}</h5>
            <p className="card-text" style={{
        flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical"
      }}>{description}</p>
            <a href={url} className="btn btn-primary" target='_blank'>Read more..</a>
        </div>
    </div>
  )
}

export default NewsItem
