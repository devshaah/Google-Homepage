import React, { useEffect, useState } from 'react'


const News = () => {
    const[data,setdata] = useState([])

        useEffect(() => {
            fetch('https://news-api14.p.rapidapi.com/top-headlines', {
              method: "GET",
              headers: {
                'X-RapidAPI-Key': '1e957e3163msh038748693f59828p1e1110jsn375aa4699a71',
                'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
              },
            })
              .then((response) => response.json())
              .then((data) => {
                setdata(data.articles[Math.floor(Math.random() * 30)].title);
              })
              .catch((error) => console.log(error));
          }, []);
  return (
    <div className='news'>
        <h2>Latest News</h2>
        <h3>{data}</h3>
        <a href='#'>Read More..</a>
    </div>
  )
}

export default News
