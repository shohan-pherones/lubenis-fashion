import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/profile";

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-up container mx-auto py-20 min-h-screen uppercase flex flex-col items-center">
      <span className="mb-10 inline-block text-2xl font-semibold">
        Sign in to your account
      </span>
      <form className="flex flex-col gap-5" onSubmit={handleSignIn}>
        <div className="form-control flex flex-col items-start gap-1">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Your email"
            required
            className="py-2 px-5 bg-transparent border border-gray-500 outline-none w-[30rem]"
          />
        </div>
        <div className="form-control flex flex-col items-start gap-1">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            required
            placeholder="Your password"
            className="py-2 px-5 bg-transparent border border-gray-500 outline-none w-[30rem]"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 self-start w-[30rem] py-2 text-gray-50 uppercase"
        >
          Sign in
        </button>
      </form>
      <p className="mt-5">
        Don't have an account?{" "}
        <Link to="/sign-up" className="border-b border-gray-700">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
