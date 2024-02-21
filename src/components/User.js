import React from 'react';

const User = ({ avatar, url, username, repos_url, following_url }) => {
    console.log(avatar)
    return(
        <div className="container">
            <div className='profile-image'>
                <img className="profile-picture" src={avatar} alt="Profile"/>
            </div>
            <div className="profile-details">
                <h2>Profile Details</h2>
                <p>Username: <a href={url} target="_blank" rel="noopener noreferrer">
                    {username}
                </a>
                </p>
                <p>Repos URL: <a href={repos_url} target="_blank" rel="noopener noreferrer"> Repos URL</a></p>
                <p>Following URL : <a href={following_url} target="_blank" rel="noopener noreferrer">{following_url}</a></p>
                
            </div>
        </div>
    );
}

export default User;