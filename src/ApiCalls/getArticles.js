import axios from "axios";

const getArticles = () => {
    return axios.get('https://nc-news-kgw0.onrender.com/api/articles')
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        return "ERROR"
    })
}

export {getArticles};