import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import { DirectionProvider } from "@radix-ui/react-direction";
import api from "./services/api";
import useAuthStore from "./store/auth/useAuthStore";

const queryClient = new QueryClient();
function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const accessToken = useAuthStore((state) => state.userInfo?.token);

  api.interceptors.request.use((config) => {
    if (isLoggedIn && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  return (
    <QueryClientProvider client={queryClient}>
      <DirectionProvider dir="rtl">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />

          <Toaster />
        </ThemeProvider>
      </DirectionProvider>
    </QueryClientProvider>
  );
}

export default App;
