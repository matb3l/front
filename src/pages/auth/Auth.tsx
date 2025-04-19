import { Button } from "antd";
import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <div>
      <Button type="primary">
        <Link to="/auth/login">Login</Link>
      </Button>
      <Button type="primary">
        <Link to="/auth/registration">Register</Link>
      </Button>
    </div>
  );
};
