import {getArticles} from '../ApiCalls/getArticles'
import { useEffect , useState } from 'react';
import ArticleCard from './ArticleCard';
import Header from '../homepageComponents/Header'
import Nav from '../homepageComponents/Nav'
const ArticlesList = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articleData) => {
            setArticles(articleData)
        })
    }, [])

    if(!articles){
        return(
        <p>Loading...</p>
        )
    }

 return (
    <div>
    <Header /> 
    <Nav />
    <ArticleCard articles={articles}/>
    </div>
 )
}

export default ArticlesList;