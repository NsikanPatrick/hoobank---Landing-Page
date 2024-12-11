import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../Constants/index";
import CountUp from "react-countup";
import Button from "./Button";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing" className="relative">
        <div className="container">
          {/* Caption section */}
          <div className="caption w-full">
            <h3 className="text-white text-center font-poppins text-6xl font-bold mb-10">
              Pricing Table
            </h3>
          </div>

          {/* Main Pricing Section */}
          <div className="pricing-section w-full">
            {/* Toggle Button section */}

            <div className="relative mb-20 z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-secondary bg-primary p-6 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                onClick={() => setMonthly(true)}
                className={`pricing-head_btn ${monthly && "text-white"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setMonthly(false)}
                className={`pricing-head_btn ${!monthly && "text-white"}`}
              >
                Annual
              </button>
              {/* Switch button */}
              <div
                className={`g6 rounded-3xl before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500"
                  ${!monthly && "translate-x-full"}`}
              />
            </div>

            {/* End of Toggle Button section */}

            {/* Pricing Cards */}
            <div className="relative flex flex-col sm:flex-row sm:gap-2 gap-10">
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`${index === 1 ? "pt-10 pb-10 mt-5 sm:mt-0" : "py-10"} w-full flex justify-center items-center flex-col text-white border-secondary border rounded-3xl`}
                >
                  {/* Displaying the icons for each plan */}
                  <div
                    className={`relative z-2 flex items-center justify-center
                    ${index === 1 ? "-mt-20" : "xl:-top-11"}`}
                  >
                    <img
                      src={plan.logo}
                      alt={plan.title}
                      className={`object-contain drop-shadow-2xl
                      ${index === 1 ? "size-[120px]" : "size-[88px]"}`}
                    />
                  </div>
                  {/* End of Icon Display for each plan */}

                  {/* Displaying Captions */}
                  <div
                    className={`relative flex flex-col items-center
                    ${index === 1 ? "pt-24" : "pt-12"}`}
                  >
                    <div
                      className={`small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase
                      ${
                        index === 1
                          ? "border-secondary rounded-full text-p3"
                          : "border-secondary rounded-full text-p1"
                      }`}
                    >
                      {plan.title}
                    </div>

                    {/* CountUp Section */}
                    <div className="relative z-2 flex items-center justify-center">
                      <div
                        className={`h-num flex items-start
                        ${index === 1 ? "text-yellow-500" : "text-secondary"}`}
                      >
                        ${" "}
                        <CountUp
                          start={plan.priceMonthly}
                          end={monthly ? plan.priceMonthly : plan.priceYearly}
                          duration={0.5}
                          easing={false}
                          preserveValue
                        />
                      </div>

                      <div className="small-1 relative top-0 ml-1 uppercase">
                        /Mo
                      </div>
                    </div>
                    {/* End of CountUp Section */}
                    <div
                      className={`body-1 relative z-2 mb-10 w-full border-b-secondary pb-9 text-center text-secondary"
                    ${index === 1 && "border-b"}`}
                    >
                      {plan.caption}
                    </div>
                  </div>
                  {/* End of Captions */}

                  {/* Plan Features Section */}
                  <ul className="mx-auto space-y-4 xl:px-7">
                    {/* Looping through the features which is inside the plans object refered here as plan. Check above, plans wwas looped as plan */}
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="relative flex items-center gap-5"
                      >
                        <img
                          src={"/images/check.png"}
                          alt="check"
                          className="size-10 object-contain"
                        />
                        <p className="flex-1">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  {/* End of Plan Features Section */}
                  <div className="mt-10 w-full flex justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>
                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited Time Offer
                  </p>
                )}
                </div>
              ))}
            </div>
            {/* End of Pricing Cards */}
          </div>
          {/* End of Main Pricing Section */}
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
