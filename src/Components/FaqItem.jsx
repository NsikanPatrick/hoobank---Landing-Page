import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import styles from "../../styles";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  // const active = activeId === item.id;
  const active = activeId; // The two lines are both correct

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className={`text-secondary small-compact mb-1.5 max-lg:hidden`}>
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={`${
              styles.heading2
            } text-white transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ${
              active && "max-lg:text-secondary lg:text-secondary"
            }`}
          >
            {item.question}
          </div>
        </div>

        <div
          className={`faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-secondary shadow-400 transition-all duration-500 group-hover:border-teal-600
            ${
              active && "before:bg-rose-100 after:rotate-0 after:bg-secondary"
            }`}
        >
          {/* <div className="g4 bg-teal- size-11/12 rounded-full shadow-300" /> */}
        </div>
      </div>

      <SlideDown>
        {active === item.id && (
          <div className="body-3 px-5 py-3.5 mx-4 mt-2 sm:mt-5 text-neutral-600 bg-secondary rounded-3xl">
            {item.answer}
          </div>
        )}
      </SlideDown>

      <div>
        {/* <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" /> */}
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-secondary" />
      </div>
    </div>
  );
};

export default FaqItem;
