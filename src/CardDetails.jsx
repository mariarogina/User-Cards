import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CardDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const { id } = useParams();

  const fetchDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  };

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  console.log(userDetails);
  return (
    <div className="detailWrap">
      <div className="cardDetails">
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <p>Website: {`https://${userDetails.website}`}</p>
        <p>Name: {userDetails.company?.name}</p>
        <p>
          Address:
          <ul>
            <li>Street: {userDetails.address?.street}</li>
            <li>Suite: {userDetails.address?.suite}</li>
            <li>City: {userDetails.address?.city}</li>
            <li>Zip-code:{userDetails.address?.zipcode}</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
