import useAuthStore from "@/store/auth/useAuthStore";

const Header = () => {
  const userInfo = useAuthStore((state) => state.userInfo);

  return (
    <div className="mb-5 py-5 border-b">
      <div className="app-container flex justify-between items-center">
        <div>{userInfo?.username}</div>
      </div>
    </div>
  );
};

export default Header;
