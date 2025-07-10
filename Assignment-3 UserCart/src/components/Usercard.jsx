import React, { useState } from 'react';

function userCard() {
    const [flag, setFlag] = useState(true);

    return (
        <div className="container">
            <div className="image">
                <img src="https://www.dpzone.in/wp-content/uploads/1/Cartoon-Girl-DP-Profile-Picture-12.jpg" alt="" />
            </div>
            <div className="contain">
                <h1><i>Priya</i></h1>
                <p><i>~ Finding beauty in the simple things❤️</i></p>
            </div>
            <div className="follow">
                <h2><i>Posts</i> <br />1200</h2>
                <h3><i>Followers</i> <br />2222</h3>
                <button onClick={() => setFlag(!flag)}>{flag ? "Follow" : "Following"}</button>
            </div>
        </div>
    )
}
export default userCard;