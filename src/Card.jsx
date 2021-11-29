import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Card = ({ user }) => {
  return (
    <div className="userCard">
      <li className="userListItem" key={uuidv4()}>
        <img
          src={`https://eu.ui-avatars.com/api/?name=${user.name}`}
          alt={user.name}
        />
        <br />
        <h5>{user.name}</h5>
        <i>
          <p>@{user.username}</p>
        </i>
        <a href={`https://${user.website}`}>{`https://${user.website}`}</a>
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
