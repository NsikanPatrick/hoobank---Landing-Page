import { Element } from "react-scroll";
import { clients } from "../Constants";
import styles from "../../styles";

const Clients = () => {
  return (
    <section>
      <Element name="clients" className={`${styles.flexCenter} my-16 sm:my-24`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="Client" className="sm:w-[192px] w-[100px] object-contain hover:cursor-pointer" />
          </div>
        ))}
      </div>
      </Element>
    </section>
  );
};

export default Clients;
