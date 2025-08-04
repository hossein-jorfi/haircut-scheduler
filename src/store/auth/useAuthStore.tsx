import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserInfo {
  username: string;
  token: string;
}

interface CartState {
  isLoggedIn: boolean;
  userInfo: UserInfo | undefined;
  logIn: (userInfo: UserInfo) => void;
  logOut: () => void;
}

const useAuthStore = create<CartState>()(
  persist(
    (set) => ({
      // initial state
      isLoggedIn: true,
      userInfo: undefined,
      // actions
      logIn: (userInfo) => set(() => ({ isLoggedIn: true, userInfo })),
      logOut: () =>
        set(() => ({
          isLoggedIn: false,
          userInfo: undefined,
        })),
    }),
    {
      name: "auth",
    }
  )
);
export default useAuthStore;
