import { useMemo } from "react";

const Button = ({ children, size, Icon }) => {
  const sizes = useMemo(
    () =>
      size === "small"
        ? "px-[2vw] py-[0.5vw] md-1:px-[1vw] md-1:py-[0.25vw] text-[2vw] md-1:text-[1vw]"
        : size === "large"
        ? "px-[2vw] py-[1vw] md-1:px-[2vw] md-1:py-[0.75vw] text-[2vw] md-1:text-[1.5vw]"
        : "",
    [size]
  );
  return (
    <button
      className={`bg-theme-red rounded font-semibold flex items-center gap-1 ${sizes}`}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
