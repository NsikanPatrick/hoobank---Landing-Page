import { GoPlus } from "react-icons/go";
import styles from "../../styles";

const Faqa = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row 2xl:m-auto py-8 w-full text-white">
        <div className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-poppins font-semibold pt-5 px-10 2xl:px-16 w-[100%] md:w-[50%]">
          <h1 className="text-center pb-4 text-[35px]">
            {/* <p className={`${styles.paragraph} m-0 leading-[30px] sm:leading-[65px]`}></p> */}
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start gap-[50px] max-w-full sm:gap-[25px] w-[100%] md:w-[50%]">
            <div className="max-w-screen-xl px-5 2xl:px-10 min-h-screen">
                <div className="grid divide-neutral-200">
                    <div className="py-5">
                        <details className="group">
                            <summary className="justify-start items-center font-medium text-2xl sm:text-3xl cursor-pointer list-none">
                                <span className="transition pr-4 group-open:rotate-45">
                                    <GoPlus />
                                </span>
                                <span>What is this</span>
                            </summary>
                        </details>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Faqa;
