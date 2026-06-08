import { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { getDashboardStats } from "../../services/adminService";

const Dashboard = () => {
  const [stats, setStats] = useState({
    contacts: 0,
    donations: 0,
    blogs: 0,
    gallery: 0,
    volunteers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data.stats);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { label: "Contacts", value: stats.contacts },
    { label: "Donations", value: stats.donations },
    { label: "Blogs", value: stats.blogs },
    { label: "Gallery", value: stats.gallery },
    { label: "Volunteers", value: stats.volunteers },
  ];

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold text-(--primary) sm:text-4xl">
        गौशाला Dashboard
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((item) => (
          <div
            key={item.label}
            className="surface-card rounded-3xl p-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-(--muted)">
              {item.label}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-(--primary)">
              {item.value}
            </h2>
          </div>
        ))}

      </div>

    </AdminLayout>
  );
};

export default Dashboard;
