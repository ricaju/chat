import React, { FC, memo } from "react";
import style from "styles/components/ChatInput.module.scss"

type Props = {}

export const ChatInput: FC<Props> = memo(function ChatInput() {
  useChatInput();

  return (
    <div className={style.root}>
      <input/>

    </div>
  );
});

function useChatInput() {
}