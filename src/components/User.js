import React from "react";

const User = ({ name, location, email, picture }) => {
  return (
    <div className='random-user'>
      <div className='user-image'>
        <img src={picture.medium} alt={name.first} />
      </div>
      <div className='user-details'>
        <h3>
          <strong>Name: </strong>
          {name.first} {name.last}
        </h3>
        <h4>
          <strong>Country: </strong>
          {location.country}
        </h4>
        <h4>
          <strong>Email: </strong>
          {email}
        </h4>
      </div>
    </div>
  );
};

export default User;
