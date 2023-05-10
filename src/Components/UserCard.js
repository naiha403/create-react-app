import React from 'react';

const UserCard = ({first_name, last_name, email, avatar}) => {
  return (
    <div className='container-card col-4 col-sm-4'>
        <div className='card-slide'>
            <div className='card'>
                <img src={avatar} className='card-img' alt={`${first_name} ${last_name}`} />
                <div className='card-body'>
                    <h5 className='card-title'>{`${first_name} ${last_name}`}</h5>
                        <p className='card-text'>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;