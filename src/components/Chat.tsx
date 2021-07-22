import React, { FC, memo } from "react";
import { DATA } from "domain/constants"
import style from "styles/components/Chat.module.scss"

type Props = {}

export const Chat: FC<Props> = memo(function Chat() {
  useChat();

  return <div className={style.root}>Chat</div>;
});

function useChat() {

}