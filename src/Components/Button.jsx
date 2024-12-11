const Button = ({ icon, styles, children }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 g5 group-hover:bg-g6 hover:text-yellow-500 font-poppins font-medium text-[18px] text-white outline-none cursor-pointer rounded-2xl ${styles}`}
    >
    <div className="flex flex-row justify-center items-center">
    {icon && (
            <img
              src={icon}
              alt="icon"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
      <span>{children}</span>
    </div>
    </button>
  );
};

export default Button;
