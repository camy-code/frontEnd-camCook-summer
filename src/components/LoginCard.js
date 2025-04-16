import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { useState } from "react";

import { useEffect } from "react";

const LoginCard = ({ onEmailChange, onPasswordChange, loginClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   useEffect(() => {
    onEmailChange(email);
    onPasswordChange(password);
  }
  , [email, password ]);

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <CardContent>
        <h1>Login</h1>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) =>  setPassword(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth onClick={loginClick}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginCard;
