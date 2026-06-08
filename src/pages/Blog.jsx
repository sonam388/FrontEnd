import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await API.get("/blog");
      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-20 bg-(--surface-soft) min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-(--primary) mb-4">
          Latest Updates
        </h1>

        <p className="text-center text-(--muted) mb-12">
          News, Activities & Gaushala Stories
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="surface-card rounded-3xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold text-(--primary) mb-3">
                  {blog.title}
                </h2>

                <p className="text-sm text-(--muted) mb-3">
                  By {blog.author}
                </p>

                <p className="text-sm text-(--muted) mb-4">
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </p>

                <p className="text-(--muted) line-clamp-3">
                  {blog.content}
                </p>

                <Link
                  to={`/blog/${blog._id}`}
                  className="inline-block mt-5 bg-(--primary) text-white px-6 py-2 rounded-xl"
                >
                  Read More
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;