import BarberShopShape from "@/assets/images/barbershop.svg";

const Shape = () => {
  return (
    <div className="relative hidden md:flex md:items-center md:justify-center w-[350px] lg:w-[450px] p-5">
      {/* <div className="bg-primary/5 pattern-1 h-full w-full rounded-md border"></div> */}
      <img src={BarberShopShape} alt="shape" className="h-full w-full" />
    </div>
  );
};

export default Shape;
