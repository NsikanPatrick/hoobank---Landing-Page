import styles from "../../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Footer sections */}
        {/* Section 1 */}
        <div className="flex-1 flex flex-col justify-center mr-10">
          <img
            src={logo}
            alt="Hoobank logo"
            className="w-[206px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments easy, reliable and secure.
          </p>
        </div>
        {/* Section 2 */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-secondary">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`${
                      index !== footerLink.links.lenght - 1 ? "mb-4" : "mb-0"
                    } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="below-footer w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="copyright font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 &copy; Hoobank
        </p>
        <div className="social-icons flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((socialmedium, index) => (
            <img
              key={socialmedium.id}
              src={socialmedium.icon}
              alt={socialmedium.id}
              className={`${
                index !== socialmedium.lenght - 1 ? "mr-6" : "mr-0"
              } w-[21px] h-[21px] object-contain cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
