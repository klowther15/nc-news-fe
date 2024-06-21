import axios from "axios"

const getUsers = () =>{
    return axios.get(`https://nc-news-kgw0.onrender.com/api/users`)
    .then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export {getUsers};