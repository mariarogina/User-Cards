import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="userCard">
      <li className="userListItem" key={user.id}>
        <h5>{user.name}</h5>
        <br />
        <img
          src={`https://eu.ui-avatars.com/api/?name=${user.name}`}
          alt={user.name}
        />
        <br />
        <i>
          <p>@{user.username}</p>
        </i>
        <a href={user.website}>{user.website}</a>
        <br />
        <Link to={`/${user.id}`}>
          <button className="moreButton btn btn-primary raise">
            MORE DETAILS
          </button>
        </Link>
      </li>
    </div>
  );
};

export default Card;
