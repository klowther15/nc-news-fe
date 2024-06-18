import { Link } from "react-router-dom"
const ArticleCard = ({articles}) => {
    return (
        <ol>
                {articles.map((article) => {
                    return (<li key={article.article_id} className="articleCards"><Link to={`/articles/${article.article_id}`}>
                        <h2>{article.title}</h2>
                        </Link>
                        <p>By {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        <img src={article.article_img_url} alt={article.topic}/>
                        <p>{article.comment_count} comments</p>
                        <p>Votes: {article.votes}</p>
                        </li>
                    )

                })}
        </ol>
    )

}

export default ArticleCard;