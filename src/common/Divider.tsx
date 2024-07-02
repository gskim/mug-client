import { ComponentProps } from "react";

type Props = {
  className?: ComponentProps<"div">["className"];
};

const Divider = ({ className }: Props) => {
  return <div className={`border-1 border-dark-3 ${className}`}></div>;
};

export default Divider;
