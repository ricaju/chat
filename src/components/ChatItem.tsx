import classNames from "classnames";
import React, { FC, memo, useCallback } from "react";
import style from "styles/components/ChatItem.module.scss"
import { Comment } from "../domain/types";
import { dateConverter } from "../util/date";

type Props = {
  comment: Comment
  className?: string
}
export const ChatItem: FC<Props> = memo(function ChatItem({comment, className}) {
  useChatItem();

  const { author: { name, picture }, text, timestamp, replays } = comment

  const renderReplays = useCallback( (replays?: Comment[]) => {
    return replays && replays.map(comment => <ChatItem comment={comment}  className={style.replay}/>)
  }, [])

  //todo: check for link in text
  return (
    <div className={classNames(style.root, className)}>
      <div className={style.content}>
        <div className={style.iconContainer}></div>
        <div className={style.chatContainer}>
          <div className={style.textContainer}>
            <p className={style.authorName}>{name}</p>
            <p className={style.text}>{text}</p>
          </div>
          <div className={style.replayContainer}>
            <p className={style.chatTime}>{dateConverter(timestamp, "LT")}</p>
            <div className={style.dot}/>
          </div>
        </div>
      </div>
      {renderReplays(replays)}
  </div>)
});

function useChatItem() {}