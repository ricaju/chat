import React, { FC, memo } from "react";
import style from "styles/components/Button.module.scss"
import classNames from "classnames";
import { useMemo } from "react";

type Props = {
  className?: string
  onClick: () => void
  variant?: "contained" | "text"
}

export const Button: FC<Props> = memo(function Button({ className, onClick, variant = "contained", children}) {
  useButton();

  const buttonClassNames = useMemo(() => {
    return classNames(style.root, [style[`${variant}`], className]);
  }, [className, variant]);

  return <button className={buttonClassNames} onClick={onClick}>
    {children}
  </button>;
});

function useButton() {
}