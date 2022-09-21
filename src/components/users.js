import { Link } from "react-router-dom";

function Users({ list }) {
  return (
    <div>
      {list.map((user, index) => (
        <Link to={`/${user.username}`} key={index}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
