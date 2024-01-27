const users = [
  { id: 1, name: "Md Mahdi" },
  { id: 2, name: "Md Hasibul" },
  { id: 3, name: "Md Rakibul" },
  { id: 4, name: "Md Farid Udding" },
];

const Second = () => {
  return (
    <div>
      <h4>2. Coding Exercise: Display array of users to browser</h4>
      <h3>All users are: </h3>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default Second;
