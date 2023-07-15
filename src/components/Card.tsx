import { FunctionComponent, PropsWithChildren } from "react";
export type CardType = PropsWithChildren<{
  onClick?: () => void;
  className?: string;
}>;
export const Card: FunctionComponent<CardType> = ({
  children,
  onClick = () => {
    return;
  },
  className = "",
}) => {
  function handdleClick() {
    onClick();
    // if (to) navigate(to);
  }
  return (
    <div
      className={`card${className ? ` ${className}` : ""}`}
      onClick={handdleClick}
    >
      <div className="card-content">{children}</div>
    </div>
  );
};
