import "./Whitepaper.css";
import arrow from "../../assets/arrow.svg";
import arrowWhitePaper from "../../assets/arrow-whitepaper.svg";
import starTealDesktop from "../../assets/stars/star-teal-desktop.png";
import starTealMobile from "../../assets/stars/star-teal-mobile.png";

const Whitepaper = () => {
  return (
    <div
      id="resources"
      className="flex justify-center bg-white px-5 py-8 lg:justify-start lg:bg-[#e1f0f0] lg:p-0"
    >
      <div className="gradient rounded-[1.25rem] px-9 py-12 text-primary-green lg:bg-gradient-to-r  lg:from-[#e1f0f0] lg:to-[#e1f0f0] lg:px-[5.625rem] lg:py-16 ">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-[0.375rem] font-clash-display lg:gap-3">
            <p className="text-sm font-medium tracking-[0.105rem] lg:text-2xl">
              Our Research
            </p>
            <div>
              <div className="flex items-center gap-[0.375rem]">
                <p className="text-2xl font-semibold leading-6 tracking-[0.06rem] lg:text-5xl">
                  <span className="inline-block">
                    <img
                      src={starTealMobile}
                      alt="star-icon-mobile"
                      className="lg:hidden"
                    />
                    <img
                      src={starTealDesktop}
                      alt="star-icon-desktop"
                      className="hidden lg:block"
                    />
                  </span>{" "}
                  The art of
                  <br />
                  mindful investing
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <p className="font-avenir-next text-lg leading-6 tracking-[0.045rem] lg:hidden">
              Bridging the
              <br />
              gap between
              <br />
              theory and practice
            </p>
            <p className="hidden font-avenir-next text-lg leading-6 tracking-[0.045rem] lg:block lg:text-[1.75rem] lg:leading-10">
              In this paper, Unmaze.app gives you actionable
              <br />
              insights on two most widely used decision frameworks
              <br />
              (MVT and BPT), along with a cutting edge technique
              <br />
              that combines both.
            </p>
            <button className="flex">
              <img src={arrow} alt="arrow-icon" className="lg:hidden" />
              <img
                src={arrowWhitePaper}
                alt="arrow-icon"
                className="mt-4 hidden self-start lg:block"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
