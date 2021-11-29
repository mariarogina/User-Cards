import { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => fetchData(), []);

  return (
    <div className="App">
      <ul className="userList">
        {users.map((user) => (
          <Card user={user} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
