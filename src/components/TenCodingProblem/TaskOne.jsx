import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TaskOne = () => {
  const [users, setUsers] = useState([]);

  /*  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => {
        console.log("users", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []); */

  //   Another Approach

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Using Axios to fetch user details
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <h2>Fetch the users list and display</h2>
      <div style={{ textAlign: "center" }}>
        <h1>User Details Table</h1>
        <table
          style={{
            borderCollapse: "collapse",
            margin: "auto",
            width: "60%",
            border: "1px solid #ddd",
          }}
        >
          <thead>
            <tr
              style={{
                border: "1px solid #ddd",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.length &&
              users.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskOne;
