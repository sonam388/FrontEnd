import { useNavigate } from "react-router-dom";
 import {
  FaHome,
  FaEnvelope,
  FaDonate,
  FaImages,
  FaBlog,
  FaMoon,
  FaSun,
  FaBars,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import useUIStore from "../../store/useUIStore";
const Sidebar = () => { 
const navigate = useNavigate();
const {
  theme,
  toggleTheme,
  adminSidebarOpen,
  closeAdminSidebar,
} = useUIStore();
const logoutHandler = () => {

  localStorage.removeItem(
    "adminInfo"
  );

  navigate("/admin");
}; 

  return ( 
    <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-(--border) bg-(--surface) p-6 text-(--text) shadow-2xl transition-transform duration-200 lg:translate-x-0 ${adminSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>

      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-(--primary)">
        गौशाला Admin
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-(--border) p-2 lg:hidden"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            type="button"
            onClick={closeAdminSidebar}
            className="rounded-full border border-(--border) p-2 lg:hidden"
            aria-label="Close sidebar"
          >
            <FaBars />
          </button>
        </div>
      </div>

      <div className="space-y-3">

        <Link
          to="/admin/dashboard"
          onClick={closeAdminSidebar}
          className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-(--border) hover:bg-(--surface-soft)"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/admin/contacts"
          onClick={closeAdminSidebar}
          className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-(--border) hover:bg-(--surface-soft)"
        >
          <FaEnvelope />
          Contacts
        </Link>

        <Link
          to="/admin/donations"
          onClick={closeAdminSidebar}
          className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-(--border) hover:bg-(--surface-soft)"
        >
          <FaDonate />
          Donations
        </Link>

        <Link
          to="/admin/gallery"
          onClick={closeAdminSidebar}
          className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-(--border) hover:bg-(--surface-soft)"
        >
          <FaImages />
          Gallery
        </Link> 

       <Link
  to="/admin/reviews"
  onClick={closeAdminSidebar}
  className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-(--border) hover:bg-(--surface-soft)"
>
  ⭐ Manage Reviews
</Link>


        <Link
          to="/admin/add-blog"
          onClick={closeAdminSidebar}
          className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-(--border) hover:bg-(--surface-soft)"
        >
          <FaBlog />
          Add Blog
        </Link>

        <Link
          to="/admin/blogs"
          onClick={closeAdminSidebar}
          className="flex items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-[var(--border)] hover:bg-[var(--surface-soft)]"
        >
          <FaBlog />
          Blogs
        </Link>
           <button
  onClick={logoutHandler}
  className="mt-10 w-full rounded-xl bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
>
  Logout
</button>
      </div>
    </aside>
  );
};

export default Sidebar; 