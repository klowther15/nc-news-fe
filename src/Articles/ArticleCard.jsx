const ArticleCard = ({articles}) => {
    console.log(articles)
    return (
        <ol>
                {articles.map((article) => {
                    return (<li key={article.article_id} className="articleCards">
                        <h2>{article.title}</h2>
                        <p>Topic: {article.topic}</p>
                        <p>Comment Count: {article.comment_count}</p>
                        <img src={article.article_img_url} alt={article.topic}/>
                        <p>Author: {article.author}</p>
                        <p>Votes: {article.votes}</p>
                        </li>
                    )

                })}
        </ol>
    )

}

export default ArticleCard;