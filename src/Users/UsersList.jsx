import { useState, useEffect } from 'react';
import CommentsList from '../Comments/CommentsList';
import { getUsers } from '../ApiCalls/getUsers';
import UsersCard from './UsersCard';
import Header from '../homepageComponents/Header';
import Nav from '../homepageComponents/Nav';
import ViewingAs from './ViewingAs';

const UsersList = () => {
    const [usernames, setUsernames] = useState([]);
    const [selectedUsername, setSelectedUsernames] = useState(null);

    useEffect(() => {
        getUsers()
        .then((data) => {
            setUsernames(data)
        })
    }, [])

    const handleUsernameClick = (user) => {
        setSelectedUsernames(user)
    }
    
    if(!usernames){
        return <p>Loading...</p>
        }
        
    return(

        <div>
            <p>Select a user to interact as...</p>
            {selectedUsername && (<div>
                <ViewingAs selectedUser={selectedUsername}/>
            </div>)}
            <UsersCard className="userIcons" usernames={usernames} onClickUsername={handleUsernameClick}/>
        </div>
    )
}

export default UsersList;