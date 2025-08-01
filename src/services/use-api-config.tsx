import api from "./api";

import useAuthStore from "@/store/auth/useAuthStore";

// This hook will be called just once in the App.tsx file
const useApiConfig = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const accessToken = useAuthStore((state) => state.userInfo?.token);

  api.interceptors.request.use((config) => {
    if (isLoggedIn && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });
};

export default useApiConfig;
