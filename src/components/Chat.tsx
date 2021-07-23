import React, { FC, memo, useCallback } from "react";
import { DATA } from "domain/constants"
import style from "styles/components/Chat.module.scss"
import { Comment } from "../domain/types";
import { ChatItem } from "./ChatItem";
import { groupBy, orderBy } from "lodash";

type Props = {}

export const Chat: FC<Props> = memo(function Chat() {
  const { commentsWithReplays } = useChat();

  const renderChatItem = useCallback( (comment: Comment) => {
    return (
      <div key={comment.id}>
        <div>vrijeme</div>
        <ChatItem comment={comment}/>
     </div>)
  }, [])

  return <div className={style.root}>{commentsWithReplays.map(renderChatItem)}</div>;
});

function useChat() {
  const { data : { comments }} = DATA

  const groupedByReplays = groupBy(comments.filter(comment => comment.parent_id), "parent_id")
  const keys = Object.keys(groupedByReplays)

  const commentsWithReplays = comments.reduce<Comment[]>((withReplays, comment) => {
    if(keys.includes(comment.id)) {
      withReplays.push({...comment, replays: groupedByReplays[comment.id]})
    } else if(!comment.parent_id) {
      withReplays.push(comment)
    }
    return orderBy(withReplays, "timestamp", ["asc"])
  }, [])

  return { commentsWithReplays }
}