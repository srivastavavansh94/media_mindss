import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import no_related_search from '../assets/no_related_search.png'

const NewsBoard = ({query, category}) => {

    const [article, setArticle] = useState([]);

    const newsOptions = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${import.meta.env.VITE_REACT_APP_API_KEY}`,
        'x-rapidapi-host': 'news-api14.p.rapidapi.com'
      }
    };

    useEffect(() => {

      const fetchData = async () => {

        let url;
        try{
          if(query){
            url = `https://news-api14.p.rapidapi.com/v2/search/articles?query=${query}&language=en`
          }
          else if(category){
            url = `https://news-api14.p.rapidapi.com/v2/trendings?topic=${category}&language=en` 
          }
          else{
              url = `https://news-api14.p.rapidapi.com/v2/trendings?topic=General&language=en`
          }

          const response = await fetch(url, newsOptions)
          const data = await response.json()
          console.log(data);
          
          
          setArticle(data.data)
          // console.log(data);
          
        }
        catch(error){
          console.error(error)
        }
      }
      fetchData()
        
    }, [query, category])

  return (
    <div>
      <h3 className='text-center p-4'>Latest <span className='badge bg-secondary'>News</span></h3>
      { article.length === 0 ? <div className="text-center fs-3">Didn't found anything related to your search<img src={no_related_search} className="rounded" alt="..." /></div>:
          article.map((news, index) => {
            return <NewsItem key={index} title={news.title} description={news.excerpt} url={news.url} image={news.thumbnail} />
          })
      }
    </div>
  )
}

export default NewsBoard
