import { card } from "../assets";
import styles, { layout } from "../../styles";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequuntur iure optio,
          libero enim est odit.
        </p>
        <Button styles="mt-10 sm:w-40 w-full">Get Started</Button>
      </div>
      {/* Right hand side */}
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
