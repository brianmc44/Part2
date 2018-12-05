
import {withRouter} from 'next/router'

import fetch from "isomorphic-unfetch";


const apiKey = "d395c6d097b44bffa943096f9080b51d";

// Initial News source
const defaultNewsSource = "the-irish-times";


async function getNews(url) {
  
  try {
    
    const res = await fetch(url);
    
    const data = await res.json();
    
    return data;
  } catch (error) {
    return error;
  }
}


class Article extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    let id = 0;

    let article = this.props.articles[id];

    return (
      <div>
        <h3>{defaultNewsSource.split("-").join(" ")}</h3>
        <div>
          <section>
          <h3>{article.title}</h3>
              <p className="author">{article.author} {article.publishedAt}</p>
              <img src={article.urlToImage} alt="article image" className="img-article"></img>

          </section>
         
        </div>

        <style jsx>{`
          section {
            width: 80%;
            background-color: #f2f2f2;
            box-shadow: 5px 10px #ff8000;
            padding: 1em;
            margin: 1em;
            text-align: center;
            font-family: "sans-Serief";
          }
          .author {
            font-style: italic;
            font-size: 0.8em;
          }
          .img-article {
            max-width: 50%;
          }
        `}</style>
      </div>
    );
  }

  
  static async getInitialProps(res) {
    
    
    const defaultUrl = `https://newsapi.org/v2/top-headlines?sources=${defaultNewsSource}&apiKey=${apiKey}`;

    
    const data = await getNews(defaultUrl);

    
    if (Array.isArray(data.articles)) {
      return {
        articles: data.articles
      };
    }
    
    else {
      console.error(data);
      if (res) {
        res.statusCode = 400;
        res.end(data.message);
      }
    }
  }
} 
export default withRouter(Article)