import {
  FunctionComponent,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
} from "react";
// import { useNavigate } from "react-router-dom";
export type ButtonProps = PropsWithChildren<{
  type?: string;
  size?: string;
  label?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  to?: string;
}>;
export const Button: FunctionComponent<ButtonProps> = ({
  type = "primary",
  size = "medium",
  label = null,
  children = null,
  onClick = () => {
    return;
  },
  disabled = false,
  className = "",
  // to = undefined,
}) => {
  // const navigate = useNavigate();
  function handdleClick(e: MouseEvent) {
    if (!disabled) {
      onClick(e);
      // if (to) navigate(to);
    }
  }
  return (
    <button
      className={`btn btn-${type} btn-${size}${
        disabled ? " btn-disabled" : ""
      }${className ? ` ${className}` : ""}`}
      onClick={handdleClick}
    >
      <div
        className={`flex ${
          (label || children) && type === "large" ? " jcc " : " jcsa "
        } aic${label || children ? " flex-gap" : ""}`}
      >
        {label ? (
          <div className="content">{label}</div>
        ) : children ? (
          <div className="content">{children}</div>
        ) : (
          ""
        )}
      </div>
    </button>
  );
};
