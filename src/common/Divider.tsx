import { ComponentProps } from "react";

type Props = {
  className?: ComponentProps<"div">["className"];
  isBorder?: boolean;
};

const Divider = ({ className, isBorder = false }: Props) => {
  return (
    <div
      className={
        isBorder ? `border-b-1 border-dark-3 ${className}` : `${className}`
      }
    ></div>
  );
};

export default Divider;
