import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddBlog from "./admin/pages/AddBlog";
import ScrollToTop from "react-scroll-to-top";
import MainLayout from "./layout/MainLayout";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Donation from "./pages/Donation";
import Gallery from "./pages/Gallery";
import AdminGallery from "./admin/pages/AdminGallery";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./admin/pages/Blogs";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Contacts from "./admin/pages/Contacts";
import Donations from "./admin/pages/Donations";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import EditBlog from "./admin/pages/EditBlog";
import useUIStore from "./store/useUIStore";  



function App() {
  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <>
      <ScrollToTop smooth />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />  
        <Route path="/donation" element={<MainLayout><Donation /></MainLayout>} /> 
        <Route path="/volunteer" element={<MainLayout><Volunteer /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/gallery" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
        <Route path="/admin/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
        <Route path="/admin/donations" element={<ProtectedRoute><Donations /></ProtectedRoute>} />
        <Route path="/admin/add-blog" element={<ProtectedRoute><AddBlog /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/admin/edit-blog/:id" element={<ProtectedRoute><EditBlog /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;