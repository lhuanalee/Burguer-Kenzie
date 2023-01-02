import { ReactNode } from "react";

import { AnchorStyle } from "./AnchorStyle";

interface iAnchorProps {
  to: string;
  className: string;
  children: ReactNode;
}

const Anchor = ({ to, className, children }: iAnchorProps) => {
  return (
    <AnchorStyle to={to} className={className}>
      {children}
    </AnchorStyle>
  );
};

export default Anchor;
