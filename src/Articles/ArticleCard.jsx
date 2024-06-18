import { Link } from "react-router-dom"
const ArticleCard = ({articles}) => {
    return (
        <ol>
                {articles.map((article) => {
                    return (<li key={article.article_id} className="articleCards"><Link to={`/articles/${article.article_id}`}>
                        <h2>{article.title}</h2>
                        <p>Topic: {article.topic}</p>
                        <Link to={`/articles/${article.article_id}/comments`}><p>View {article.comment_count} comments</p></Link>
                        <img src={article.article_img_url} alt={article.topic}/>
                        <p>Author: {article.author}</p>
                        <p>Votes: {article.votes}</p>
                        </Link></li>
                    )

                })}
        </ol>
    )

}

export default ArticleCard;