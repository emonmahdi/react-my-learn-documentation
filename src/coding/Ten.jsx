import { useEffect, useState } from "react";

const Ten = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <h2>10. Coding Exercise: Fetching Data from Url</h2>
      <h3>All user data from Api</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ten;
