const users = [
  { id: 1, name: "Md Mahdi" },
  { id: 2, name: "Md Hasibul" },
  { id: 3, name: "Md Rakibul" },
  { id: 4, name: "Md Farid Udding" },
];

const Second = () => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <h2>2. Coding Exercise: Display array of users to browser</h2>
      <h3>All users are: </h3>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default Second;
