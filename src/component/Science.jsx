import React, { useEffect } from 'react';
import { useState } from "react";
import Newsitem from './Newsitem';
import Carousel from './Carousel';

const Science = () => {

    const [articles, setarticles] = useState([]);
    useEffect(()=>{
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1b4a55a48f114a6cb112e801767fc42a";
        fetch(url).then(response=> response.json()).then(data=> setarticles(data.articles));
    },[])
  return (
    <>
    <Carousel img1= "img/science1.webp"/>
     <div className="container my  3">
     <div className="row">
      {articles.map((news,index)=>{
      
      return(
      <div className="col  md  4">
          <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} myurl={news.url}/>
      </div>
      )
     
       }
      )}
      </div>
      <div className="d-flex justify-content-between">
              
              <button type="button"  className="btn btn-danger btn btn-primary btn-sm">&larr; Previous</button>
              <button type="button" className="btn btn-danger btn btn-primary btn-sm" >Next &rarr;</button>
              </div>
    </div>
   
   
    </>
  )
}

export default Science

