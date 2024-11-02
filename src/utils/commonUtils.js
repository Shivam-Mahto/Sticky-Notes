import { pxToVh, pxToVw } from "./viewportConversions";

export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
  const offsetLeft = card.offsetLeft + mouseMoveDir.x;
  const offsetTop = card.offsetTop + mouseMoveDir.y;

  const cardHeader = card.querySelector(".card-header");

  const headerWidth = cardHeader.offsetWidth;
  const headerHeight = cardHeader.offsetHeight;

  const newX = offsetLeft < 0 ? 0 : offsetLeft;
  const newY = offsetTop < 0 ? 0 : offsetTop;

  return {
    x: pxToVw(
      newX + headerWidth > window.innerWidth
        ? window.innerWidth - headerWidth
        : newX
    ),
    y: pxToVh(
      newY + headerHeight > window.innerHeight
        ? window.innerHeight - headerHeight
        : newY
    ),
  };
};

export const autoGrow = (textAreaRef) => {
  const { current } = textAreaRef;
  current.style.height = "auto";
  current.style.height = current.scrollHeight + "px";
};

export const setZIndex = (selectedCard) => {
  selectedCard.style.zIndex = 999;

  Array.from(document.getElementsByClassName("card")).forEach((card) => {
    if (card !== selectedCard) {
      card.style.zIndex = selectedCard.style.zIndex - 1;
    }
  });
};
