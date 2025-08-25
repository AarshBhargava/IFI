  import React, { useState } from "react";
  import { Api } from "../lib/api";
  import { loginWithToken } from "../lib/auth";
  import { Link, useNavigate, useLocation } from "react-router-dom";

  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const nav = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; // fix here

    const onSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      try {
        const { data } = await Api.login({ email, password });
        loginWithToken(data.token);
        nav(from, { replace: true });
      } catch (err) {
        setError(err?.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="max-w-md mx-auto">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Welcome back</h2>
          <p className="text-sm text-neutral-600 mb-4">Sign in to continue.</p>

          <form className="space-y-3" onSubmit={onSubmit}>
            <div>
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <button className="btn-primary w-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="text-sm text-neutral-600 mt-4">
            New here? <Link className="underline" to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    );
  }
