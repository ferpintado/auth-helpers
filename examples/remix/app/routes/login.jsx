import supabase from "~/utils/supabase";
import { Link } from "remix";

export default () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    await supabase.auth.signIn({
      email,
      password,
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white text-center">
      <h1 className="text-4xl mb-4">Login</h1>
      <form className="flex flex-col mb-2" onSubmit={handleLogin}>
        <input
          name="email"
          className="border border-gray-200 bg-transparent flex-1 px-2 mb-4"
          value="jon@example.com"
          readOnly
        />
        <input
          type="password"
          name="password"
          className="border border-gray-200 bg-transparent flex-1 px-2 mb-4"
          value="password"
          readOnly
        />
        <button className="bg-gray-700 py-2 px-4">Go!</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};