import { AuthContext } from "@/contexts/authContext";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const SIGN_IN = gql`
  mutation SignIn($password: String!, $email: String!) {
    signIn(password: $password, email: $email)
  }
`;

export default function SignInPage() {
  const { setAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  })

  const [signIn] = useMutation(SIGN_IN, {
    variables: {
      email,
      password
    },
    onCompleted(data: any) {
      localStorage.setItem("token", data.signIn);
      setAuthenticated(true);
      router.push('/');
    }
  })

  return (
    <div>
      <label>Login</label>
      <input data-test-id="email" onChange={(e) => {
        setEmail(e.target.value)
      }} />
      <br/>
      <label>Password</label>
      <input data-test-id="password" type="password" onChange={(e) => {
        setPassword(e.target.value)
      }}/>
      <button onClick={() => {signIn()}}>
        Login
      </button>
    </div>
  );
}
