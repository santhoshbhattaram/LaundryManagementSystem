/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 

Learnt from https://codesandbox.io/s/parse-github-gist-in-wp-rest-api-content-pw8ut
*/

import React, { useState, useEffect } from "react";
import WpApiContent from "./WpApiContent";
import "./Blog.css";

function Blog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://vxa3922.uta.cloud/WDMProject_Phase3/Blog/wp-json/wp/v2/posts")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div>
            <a href="http://vxa3922.uta.cloud/WDMProject_Phase3/Blog/"><h3 className="BlogLink">Direct link for WordPress Blog</h3></a>
          <ul>
            {items.map(item => (
              <li key={item.id}>
               <h2 className="BlogLink"> {item.title.rendered} </h2>
               <WpApiContent content={item.content.rendered}/>
               <hr></hr>
              </li>
            ))}
          </ul>
          </div>
        );
      }
    }

export default Blog;