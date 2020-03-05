import { LOGIN_USER } from "../constants"; // verificar si esto esta exportando bien
import axios from "axios";

const addLogin = user => ({
  type: LOGIN_USER,
  user
});

const loginUser = user => dispatch =>
  axios
    .post("/api/users/login", { email: user.email, password: user.password })
    .then(user => {
      dispatch(addLogin(user.data));
    });

export default loginUser;
