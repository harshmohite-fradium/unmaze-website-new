import backgroundLogo from "../assets/background-logo.svg";
const BackgroundLogo = () => {
  return (
    <div className="r absolute right-[-12rem] top-[3rem] w-[31rem] rotate-[80deg] lg:right-[-3rem] lg:top-[-3rem] lg:w-[37.5rem] lg:rotate-0">
      <img
        src={backgroundLogo}
        alt="background-logo"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default BackgroundLogo;
