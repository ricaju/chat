import React, { FC, memo, useCallback } from "react";
import style from "styles/components/ChatInput.module.scss"
import { Button } from "./Button";
import { ReactComponent as Plus } from "assets/icons/plus.svg"
import { ReactComponent as Send } from "assets/icons/send.svg"

type Props = {}

export const ChatInput: FC<Props> = memo(function ChatInput() {
  const { handleUpload } = useChatInput();

  return (
    <div className={style.root}>
      <Button onClick={handleUpload}><Plus/></Button>
      <input/>
      <Button onClick={handleUpload}>
        <Send/>
        <span className={style.buttonText}>Send message</span>
      </Button>

    </div>
  );
});

function useChatInput() {
  const handleUpload = useCallback(() => {}, [])

  return { handleUpload }
}