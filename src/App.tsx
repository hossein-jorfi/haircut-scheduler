import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";
import { DirectionProvider } from "@radix-ui/react-direction";

const queryClient = new QueryClient();
function App() {
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
