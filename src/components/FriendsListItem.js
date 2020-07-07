import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class FriendsListItem extends React.Component
{
    render()
    {
        return(
            <div>
                <Link className="friends-item" to={`user/${this.props.friend._id}`}>
                    <div className="friends-img">
                        <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-pic" />

                    </div>
                    <div className="friends-name">
                        {this.props.friend.name}
                    </div>
                </Link>
            </div>
        );
    }
}

export default FriendsListItem;