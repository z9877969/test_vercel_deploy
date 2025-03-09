import UserBar from "../UserBar/UserBar.jsx";

const UserPanel = () => {
  return (
    <div>
      <p>Hello, {false ? "user.name" : "User"}</p>
      <UserBar />
    </div>
  );
};
export default UserPanel;
