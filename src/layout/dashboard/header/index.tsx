import useAuthStore from "@/store/auth/useAuthStore";
import NewAppointmentButton from "./new-appointment-button";

const Header = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  return (
    <div className="mb-5 py-5">
      <div className="app-container flex justify-between items-center">
        <div>{userInfo?.username}</div>
        <NewAppointmentButton />
      </div>
    </div>
  );
};

export default Header;
