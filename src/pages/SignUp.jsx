import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-up container mx-auto py-20 min-h-screen uppercase flex flex-col items-center">
      <span className="mb-10 inline-block text-2xl font-semibold">
        Create your account
      </span>
      <form className="flex flex-col gap-5" onSubmit={handleSignUp}>
        <div className="form-control flex flex-col items-start gap-1">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Sarah Parker"
            required
            className="py-2 px-5 bg-transparent border border-gray-500 outline-none w-[30rem]"
          />
        </div>
        <div className="form-control flex flex-col items-start gap-1">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="hello@example.com"
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
            placeholder="Write a password"
            className="py-2 px-5 bg-transparent border border-gray-500 outline-none w-[30rem]"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 self-start w-[30rem] py-2 text-gray-50 uppercase"
        >
          Create account
        </button>
      </form>
      <p className="mt-5">
        Already have an account?{" "}
        <Link to="/sign-in" className="border-b border-gray-700">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
