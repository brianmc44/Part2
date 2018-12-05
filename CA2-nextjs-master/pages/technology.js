import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

import SearchForm from '../components/SearchForm';



const apiKey = 'd395c6d097b44bffa943096f9080b51d';


const defaultNewsSource = 'techcrunch';


async function getNews(url) {


  try {

    const res = await fetch(url);

    const data = await res.json();

    return (data);
  } catch (error) {

    return (error);
  }
}


export default class News extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      showMe:false,
      newsSource: "",
      url: "",
      articles: []
    }
  }

  setNewsSource = (input) => {
    this.setState({
      newsSource: input,
      url: `https://newsapi.org/v2/top-headlines?sources=${input}&apiKey=${apiKey}`
    })
  }


  searchNewsAPI = (event) => {

    this.setState({

      newsSource: `${event.target.innerText}`,

      url: `https://newsapi.org/v2/${event.target.name}&apiKey=${apiKey}`
    })
    console.log(this.state.url);
  }
  operation(){
    this.setState({
       showMe:!this.state.showMe
    })
  }

  render() {


    if (this.state.articles.length == 0) {
      this.state.articles = this.props.articles;
    }
    return (
      <div>
        <SearchForm setNewsSource={this.setNewsSource} />


        <ul className="newsMenu">
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?sources=rte">Latest Technology News</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?sources=techradar">Tech radar</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?sources=the-next-web">The Next Web</a></li>
          <li><a href="#" onClick={this.searchNewsAPI} name="top-headlines?sources=hacker-news">Hacker News</a></li>
        </ul>

        <h3>{this.state.newsSource.split("-").join(" ")}</h3>
        <div>
          {this.state.articles.map((article, index) => (
            <section key={index}>
              <h3>{article.title}</h3>
              <p className="author"><h3>Author</h3>{article.author}<h3>Time</h3> {article.publishedAt}</p>
              <img src={article.urlToImage} alt="article image" className="img-article"></img>
              <p><Link as={`/article/${index}`} href={`/article?id=${index}`}><a>Read More</a></Link></p>
              {
                    this.state.showMe?
                      <div>
                        <p>{article.description}</p>
                        <p>{article.content}</p>    
                      </div>
                      :null
                  }
              <button onClick={()=>this.operation()}><a>See more</a></button>
            </section>
          ))}
        </div>
        

        <style jsx>{`

              section {
                width: 80%;
                background-color: #f2f2f2;
                box-shadow: 5px 10px #87C94A;
                padding: 1em;
                margin: 1em;
                text-align: center;
                font-family: "sans-Serief";
              }

            .author {
                font-style: italic;
                font-size: 0.8em;
                color: black;
              }
            .img-article {
                border: 0.25em solid gray;
                max-width: 50%;
              }

            .newsMenu {
              display: flex;
              flex-direction: row;
              margin: 0;
              padding: 0;
              margin-top: 20px;
            }
            .newsMenu li {
              display: inline-table;
              padding-left: 20px;
            }

            .newsMenu li a {
            font-size: 1.1em;
            color: black;
            font-style: italic;
            display: block;
            text-decoration: none;
            border-radius: 25px;
            border: 1.5px solid green;
            padding: 10px; 
            width: 95px;
            height: 60px;
            text-align: center;
    }

            .newsMenu li a:hover {
              color: green;
              text-decoration: underline;
            }
          `}</style>
      </div>
    );
  }


  static async getInitialProps(response) {
     
    const apiKey = "d395c6d097b44bffa943096f9080b51d";

    const defaultNewsSource = "techcrunch";

    const defaultUrl = `https://newsapi.org/v2/top-headlines?sources=${defaultNewsSource}&apiKey=${apiKey}`;

 
    const data = await getNews(defaultUrl);


    if (Array.isArray(data.articles)) {
      return {
        articles: data.articles
      }
    }
  
    else {
      console.error(data)
      if (response) {
        response.statusCode = 400
        response.end(data.message);
      }
    }
  }


  async componentDidUpdate(prevProps, prevState) {

    
    if (this.state.url !== prevState.url) {

      
      const data = await getNews(this.state.url);

      
      if (Array.isArray(data.articles)) {

        this.state.articles = data.articles;

        this.setState(this.state);
      }

      else {
        console.error(data)
        if (response) {
          response.statusCode = 400
          response.end(data.message);
        }
      }
    }
  } 



}