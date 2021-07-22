import React, { FC, memo } from "react";
import style from "styles/components/ChatItem.module.scss"
import { Comment } from "../domain/types";

type Props = {
  comment: Comment
}
export const ChatItem: FC<Props> = memo(function ChatItem({comment}) {
  useChatItem();


  //todo: chat chat day, rekurzija
  return (<div>
    <div className={style.iconContainer}>
      {comment.text}
    </div>

  </div>)
});

function useChatItem() {}