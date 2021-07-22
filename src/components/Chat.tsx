import React, { FC, memo, useCallback } from "react";
import { DATA } from "domain/constants"
import style from "styles/components/Chat.module.scss"
import {Comment} from "../domain/types";
import { ChatItem } from "./ChatItem";
import { checkDateDifference, dateConverter } from "util/date";

type Props = {}

export const Chat: FC<Props> = memo(function Chat() {
  const {comments} = useChat();

  const renderChatHeader = useCallback( (timestamp :number, parent?: string) => {
    if(checkDateDifference(timestamp, parent)) {
      return <div>{dateConverter(timestamp).getFullYear()}</div>
    }
  }, [])

  const renderChatItem = useCallback( (comment: Comment, index: number) => {
    return (
      <>
        {renderChatHeader(comment.timestamp, comment?.parent_id)}
        <ChatItem comment={comment}/>
     </>)
  }, [renderChatHeader])

  return <div className={style.root}>{comments.map(renderChatItem)}</div>;
});

function useChat() {
  const { data : { comments }} = DATA

  //todo reduce data parent to replays

  return { comments }
}