import { useState } from "react";

import API from "../../services/api";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import useUIStore from "../../store/useUIStore";

const AdminLogin = () => {

  const navigate = useNavigate();
  const { theme, toggleTheme } = useUIStore();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const { data } =
        await API.post(
          "/admin/login",
          formData
        );

      localStorage.setItem(
        "adminInfo",
        JSON.stringify(data)
      );

      toast.success(
        "Login Successful"
      );

      navigate(
        "/admin/dashboard"
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-(--page-bg) px-4 py-10">

      <button
        type="button"
        onClick={toggleTheme}
        className="absolute right-4 top-4 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm shadow-sm"
      >
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>

      <form
        onSubmit={handleSubmit}
        className="surface-card w-full max-w-md rounded-3xl p-6 sm:p-10"
      >

        <h2 className="mb-8 text-center text-3xl font-bold text-(--primary) sm:text-4xl">
          Admin Login
        </h2>

        <div className="space-y-6">

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-(--border) bg-(--surface) p-4 outline-none transition focus:border-(--primary)"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-xl border border-(--border) bg-(--surface) p-4 outline-none transition focus:border-(--primary)"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-(--primary) py-4 text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {
              loading
                ? "Loading..."
                : "Login"
            }
          </button>

        </div>

      </form>
    </div>
  );
};

export default AdminLogin;