import React, { FC, memo } from "react";
import style from "styles/components/Input.module.scss";
import classNames from "classnames";

type Props = {
  className?: string;
};

export const Input: FC<Props> = memo(function Input({ className }) {
  useInput();

  return <input className={classNames(style.root, className)} />;
});

function useInput() {}
