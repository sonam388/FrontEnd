import { create } from "zustand";
import { persist } from "zustand/middleware";

const resolveInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("gousala-ui");

  if (savedTheme) {
    try {
      const parsed = JSON.parse(savedTheme);
      if (parsed?.state?.theme === "dark") {
        return "dark";
      }
    } catch {
      return "light";
    }
  }

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const useUIStore = create(
  persist(
    (set) => ({
      theme: resolveInitialTheme(),
      siteMenuOpen: false,
      adminSidebarOpen: false,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
      openSiteMenu: () => set({ siteMenuOpen: true }),
      closeSiteMenu: () => set({ siteMenuOpen: false }),
      toggleSiteMenu: () => set((state) => ({ siteMenuOpen: !state.siteMenuOpen })),
      openAdminSidebar: () => set({ adminSidebarOpen: true }),
      closeAdminSidebar: () => set({ adminSidebarOpen: false }),
      toggleAdminSidebar: () =>
        set((state) => ({ adminSidebarOpen: !state.adminSidebarOpen })),
    }),
    {
      name: "gousala-ui",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useUIStore;