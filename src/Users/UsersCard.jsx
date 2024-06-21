const UsersCard = ({usernames, onClickUsername }) => {

    return (
        <ul>
            {usernames.map((username, index) => {
                return (
                    <li key={index} onClick={() => {onClickUsername(username)}} className="usersCard">
                        <h2>{username.username}</h2>
                        <p>{username.name}</p>
                        <img src={username.avatar_url} alt={username.username}/>
                    </li>
                )
            })}
        </ul>
    )
}
 
        
    

export default UsersCard;