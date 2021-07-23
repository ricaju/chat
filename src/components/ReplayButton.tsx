import React, { FC, memo } from "react";
import style from "styles/components/ReplayButton.module.scss"

type Props = {}

export const ReplayButton: FC<Props> = memo(function ReplayButton({children}) {
  useReplayButton();

  return <button className={style.root}>{children}</button>;
});

function useReplayButton() {

}