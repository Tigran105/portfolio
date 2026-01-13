import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const initialTheme: Theme = savedTheme ?? "dark";

  document.documentElement.classList.toggle("dark", initialTheme === "dark");

  return {
    theme: initialTheme,

    setTheme: (theme) => {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
      set({ theme });
    },

    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        return { theme: newTheme };
      }),
  };
});
