import { useNavigate } from "react-router";
import useAuthStore, { type UserInfo } from "./useAuthStore";

export const useAuth = () => {
  const navigate = useNavigate();
  const loggIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);

  const loginUser = (userInfo: UserInfo) => {
    loggIn(userInfo);
    navigate("/");
  };

  const logoutUser = () => {
    logOut();
    navigate("/auth/login");
  };

  return { loginUser, logoutUser };
};
