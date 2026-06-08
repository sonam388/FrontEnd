import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-(--page-bg) text-(--text) transition-colors duration-200">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;