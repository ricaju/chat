import React, { FC, memo } from "react";
import style from "styles/components/Button.module.scss"
import classNames from "classnames";

type Props = {
  className?: string
  onClick: () => void
}

export const Button: FC<Props> = memo(function Button({ className, onClick, children}) {
  useButton();

  return <button className={classNames(style.root, className)} onClick={onClick}>
    {children}
  </button>;
});

function useButton() {
}