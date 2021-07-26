import classNames from "classnames";
import React, { FC, memo, useCallback, useMemo } from "react";
import style from "styles/components/ChatItem.module.scss"
import { Comment } from "../domain/types";
import { dateConverter } from "../util/date";
import { Anchorme } from 'react-anchorme'
import ivana from "assets/img/ivana.jpg"
import ines from "assets/img/ines.jpg"
import pero from "assets/img/pero.jpg"
import zmaj from "assets/img/zmaj.jpg"
import { Button } from "./Button";

type Props = {
  comment: Comment
  className?: string
}
export const ChatItem: FC<Props> = memo(function ChatItem({comment, className}) {
  const { replayText, handleReplay, renderFakeImgPath } = useChatItem(comment);

  const { author: { name, picture }, text, timestamp, replays } = comment

  const renderReplays = useCallback( (replays?: Comment[]) => {
    return replays && replays.map(comment => <ChatItem comment={comment}  className={style.replay} key={comment.id}/>)
  }, [])

  return (
    <div className={classNames(style.root, className)}>
      <div className={style.content}>
        <div className={style.iconContainer}>
          <img src={renderFakeImgPath(picture)} alt={name}/>
        </div>
        <div className={style.chatContainer}>
          <div className={style.textContainer}>
            <p className={style.authorName}>{name}</p>
            <p className={style.text}><Anchorme>{text}</Anchorme></p>
          </div>
          <div className={style.replayContainer}>
            <p className={style.chatTime}>{dateConverter(timestamp, "LT")}</p>
            <div className={style.dot}/>
            <Button variant="text" onClick={handleReplay}>{replayText}</Button>
          </div>
        </div>
      </div>
      {renderReplays(replays)}
  </div>)
});

function useChatItem(comment: Comment) {
  const { replays } = comment

  const handleReplay = useCallback( () => {}, [])

  const replayText = useMemo( () => {
    if(replays && replays.length > 0)  {
      return `Replay (${replays.length})`
    } else {
      return "Replay"
    }

  }, [replays])

  const renderFakeImgPath = useCallback( (picture) => {
    switch (picture) {
      case "img/ines.jpg":
        return ines
      case "img/zmaj.jpg":
        return zmaj
      case "img/ivana.jpg":
        return ivana
      case "img/pero.jpg":
        return pero
    }
  }, [])

  return { replayText, renderFakeImgPath, handleReplay }
}