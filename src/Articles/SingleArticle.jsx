import { useEffect , useState } from "react";
import {getSingleArticle} from '../ApiCalls/getSingleArticle';
import { useParams } from "react-router-dom";
import Header from "../homepageComponents/Header";
import Nav from "../homepageComponents/Nav";
import { updateArticleVotes } from "../ApiCalls/updateVotes";
import CommentsList from "../Comments/CommentsList";
import PostAComment from "../Comments/PostAComment";

const SingleArticlePage = () => {

const [article, setArticle] = useState(null);
const [votes, setVotes] = useState(0);
const [isVisible, setIsVisible] = useState(false)
const { article_id } = useParams();

useEffect(() => {
   getSingleArticle(article_id).then((data) => {
        setArticle(data)
        setVotes(data.votes)
    });
}, [article_id])

const handleVotes = () => {
    updateArticleVotes(article_id, 1).then((data) => {
        setVotes(data.votes)
    })
    .catch((err) => {
        return (
            <div>Unable to complete vote request.</div>
        )
    })
}

if(!article){
    return(
        <div>
            Loading...
        </div>
    )
}
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
    <p>Votes: {votes}</p>
    <button onClick={handleVotes}>VOTE FOR ME!</button>
   <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide Comments" : `Show ${article.comment_count} Comments`}</button>
    <p>{article.created_at}</p>
    </div>
        <PostAComment article_id={article_id}/>
    {isVisible && (
        <div>
            <CommentsList />
        </div>
    )}
    </div>
)
}

export default SingleArticlePage;