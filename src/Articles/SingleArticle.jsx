import { useEffect , useState } from "react";
import {getSingleArticle} from '../ApiCalls/getSingleArticle';
import { useParams } from "react-router-dom";
import Header from "../homepageComponents/Header";
import Nav from "../homepageComponents/Nav";

const SingleArticlePage = () => {
const [article, setArticle] = useState(null);
const { article_id } = useParams();


useEffect(() => {
   getSingleArticle(article_id).then((data) => {
        setArticle(data);
    });
}, [article_id])

if(!article){
    return(
        <div>
            Loading...
        </div>
    )
}
console.log(article)
return(
    <div>
    <Header/>
    <Nav/>
    <div className="singleArticlePage">
    <h2>{article.title}</h2>
    <p>By {article.author}</p>
    <img src={article.article_img_url} alt={article.topic}/>
    <p>{article.body}</p>
    <p>Topic: {article.topic}</p>
    <p>Votes: {article.votes}</p>
    <p>{article.created_at}</p>
    </div>
    </div>
)
}

export default SingleArticlePage;