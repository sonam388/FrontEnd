import Sidebar from "../components/Sidebar";
import useUIStore from "../../store/useUIStore";

const AdminLayout = ({ children }) => {
  const { adminSidebarOpen, closeAdminSidebar } = useUIStore();

  return (
    <div className="min-h-screen bg-(--page-bg) text-(--text) lg:flex">
      {adminSidebarOpen && (
        <button
          type="button"
          aria-label="Close admin sidebar"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={closeAdminSidebar}
        />
      )}

      <Sidebar />

      <div className="min-h-screen flex-1 lg:pl-72">
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;