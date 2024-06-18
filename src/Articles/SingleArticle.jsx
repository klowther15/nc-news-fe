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
    <h2>{article.data.title}</h2>
    <p>By {article.data.author}</p>
    <img src={article.data.article_img_url} alt={article.data.topic}/>
    <p>{article.data.body}</p>
    <p>Topic: {article.data.topic}</p>
    <p>Votes: {article.data.votes}</p>
    <p>{article.data.created_at}</p>
    </div>
    </div>
)
}

export default SingleArticlePage;