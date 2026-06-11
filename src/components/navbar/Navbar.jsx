import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import useUIStore from "../../store/useUIStore";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const {
    theme,
    toggleTheme,
    siteMenuOpen,
    toggleSiteMenu,
    closeSiteMenu,
  } = useUIStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("gousala-language", i18n.language);
      document.documentElement.lang = i18n.language;
    }
    closeSiteMenu();
  }, [i18n.language, closeSiteMenu]);

  const navLinkClass = "transition hover:text-[var(--primary)]";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-(--border) bg-[var(--surface)/0.92] shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Gaushala Logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-(--primary)/20"
          />

          <div>
            <h1 className="text-base font-bold leading-tight text-(--primary) md:text-xl">
              आचार्य श्री विद्यासागर
            </h1>

            <p className="text-xs text-(--muted)">
              दयोदय गौशाला, तेंदूखेड़ा
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 font-medium text-(--text) md:flex">

          <Link
            to="/"
            className={navLinkClass}
          >
            {t("home")}
          </Link>

          <Link
            to="/about"
            className={navLinkClass}
          >
            {t("about")}
          </Link>

          <Link
            to="/products"
            className={navLinkClass}
          >
            {t("products")} 
          </Link>

          <Link
            to="/gallery"
            className={navLinkClass}
          >
            {t("gallery")}
          </Link>

          <Link
            to="/donation"
            className={navLinkClass}
          >
            {t("donation")}
          </Link>

          <Link
            to="/blog"
            className={navLinkClass}
          >
            {t("blog")}
          </Link>

          <Link
            to="/contact"
            className={navLinkClass}
          >
            {t("contact")}
          </Link>

        </ul>

        <div className="hidden items-center gap-3 md:flex">

          <button
            onClick={() =>
              i18n.changeLanguage(
                i18n.language === "en"
                  ? "hi"
                  : "en"
              )
            }
            className="rounded-full bg-(--primary) px-4 py-2 text-white transition hover:opacity-90"
          >
            {i18n.language === "en"
              ? "हिंदी"
              : "English"}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-full border border-(--border) px-3 py-2 text-sm transition hover:border-(--primary)"
          >
            {theme === "light" ? "dark" : "light"}
          </button>

          <Link
            to="/donation"
            className="rounded-full bg-(--accent) px-5 py-2 text-white transition hover:opacity-90"
          >
            {t("donate")}
          </Link>

        </div>

        <button
          className="rounded-full border border-[var(--border)] p-2 text-2xl md:hidden"
          onClick={toggleSiteMenu}
          aria-label="Toggle navigation menu"
        >
          <HiMenuAlt3 />
        </button>

      </div>

      {siteMenuOpen && (
        <div className="border-t border-(--border) bg-(--surface) px-5 pb-5 pt-4 font-medium text-(--text) md:hidden">

          <Link to="/" onClick={closeSiteMenu}>
            {t("home")}
          </Link>

          <Link to="/about" onClick={closeSiteMenu}>
            {t("about")}
          </Link>

          <Link to="/products" onClick={closeSiteMenu}>
            {t("products")}
          </Link>

          <Link to="/gallery" onClick={closeSiteMenu}>
            {t("gallery")}
          </Link>

          <Link to="/donation" onClick={closeSiteMenu}>
            {t("donation")}
          </Link>

          <Link to="/blog" onClick={closeSiteMenu}>
            {t("blog")}
          </Link>

          <Link to="/contact" onClick={closeSiteMenu}>
            {t("contact")}
          </Link>

          <button
            onClick={() =>
              i18n.changeLanguage(
                i18n.language === "en"
                  ? "hi"
                  : "en"
              )
            }
            className="rounded-full bg-(--primary) px-4 py-2 text-white"
          >
            {i18n.language === "en"
              ? "हिंदी"
              : "English"}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-full border border-(--border) px-4 py-2 text-left"
          >
            {theme === "light" ? "dark" : "light"}
          </button>

          <Link
            to="/donation"
            onClick={closeSiteMenu}
            className="rounded-full bg-(--accent) px-4 py-2 text-center text-white"
          >
            {t("donate")}
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;