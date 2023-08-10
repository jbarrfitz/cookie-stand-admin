import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + "/api/token/";

const AuthContext = createContext({
  tokens: undefined,
  user: undefined,
  error: undefined,
  login: undefined,
  logout: undefined,
});

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("You forgot AuthProvider!");
  }
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    error: undefined,
    login,
    logout,
  });

  async function login(username, password) {
    try {
      // const response = await axios.post(tokenUrl, { username, password });

      const options = {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(tokenUrl, options);

      const data = await response.json();

      /**
       * complete: return an object with the decoded payload and header
       * see: https://www.npmjs.com/package/jsonwebtoken
       **/
      const decodedAccess = jwt.decode(data.access, { complete: true, json: true });

      if (!decodedAccess.payload) throw new Error("Unable to decode user, they may not exist");
      if (!decodedAccess.payload["user_id"]) throw new Error("Unable to find user id, they may not exist");

      // TODO: finish implementing auth decoder
      const user = {
        username: decodedAccess.payload.username,
        email: decodedAccess.payload.email,
        id: decodedAccess.payload.user_id,
      };

      const newState = {
        tokens: data,
        user,
      };

      setState((prevState) => ({ ...prevState, ...newState }));
    } catch (err) {
      const error = `Failed to auth: ${err instanceof Error ? err.message : err.toString()}`;
      console.error(error, err);
      setState((prevState) => ({ ...prevState, error }));
    }
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>;
}
