import { Element } from "react-scroll";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../../styles";

const Billing = () => {
  return (
    <section id="product">
      <Element name="product" className={`${layout.sectionReverse}`}>
      {/* The sectionReverse makes it show the texts first before the image on mobile */}
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="Billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      {/* Right side */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          excepturi doloremque autem harum corrupti optio, illum perferendis
          enim molestias amet a commodi, corporis facere nihil eius molestiae
          porro reiciendis veniam dolores provident, maxime
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="Apple Store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img src={google} alt="Google Play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Billing;
