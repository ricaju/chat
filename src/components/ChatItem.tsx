import classNames from "classnames";
import React, { FC, memo, useCallback } from "react";
import style from "styles/components/ChatItem.module.scss"
import { CommentWithReplay } from "../domain/types";

type Props = {
  comment: any //todo
  className?: string
}
export const ChatItem: FC<Props> = memo(function ChatItem({comment, className}) {
  useChatItem();

  const renderReplays = useCallback( (replays?: Comment[]) => {
    return replays && replays.map(comment => <ChatItem comment={comment}  className={style.replay}/>)
  }, [])

  return (<div className={classNames(style.root, className)}>
    <div className={style.iconContainer}>
      {comment.text}
      {renderReplays(comment.replays)}
    </div>

  </div>)
});

function useChatItem() {}