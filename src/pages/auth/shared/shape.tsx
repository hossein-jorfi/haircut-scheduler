import BarberShopShape from "@/assets/images/barbershop.svg";

const Shape = () => {
  return (
    <div className="relative hidden md:flex md:items-center md:justify-center w-[350px] lg:w-[400px] p-5">
      <img src={BarberShopShape} alt="shape" className="h-full w-full" />
    </div>
  );
};

export default Shape;
