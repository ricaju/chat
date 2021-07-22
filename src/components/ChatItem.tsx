import React, { FC, memo } from "react";
import style from "styles/components/ChatItem.module.scss"

type Props = {}
export const ChatItem: FC<Props> = memo(function ChatItem() {
  useChatItem();


  //todo: chat chat day, rekurzija
  return (<div>
    <div className={style.iconContainer}>

    </div>

  </div>)
});

function useChatItem() {}