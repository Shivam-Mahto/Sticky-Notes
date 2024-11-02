import React, { useEffect, useRef, useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6';
import { autoGrow, setNewOffset, setZIndex } from '../utils/commonUtils.js';

const NoteCard = ({ note }) => {

  const textAreaRef = useRef(null);
  const cardRef = useRef(null);
  const [position, setPosition] = useState(JSON.parse(note.position));
  
  const body = JSON.parse(note.body);
  const colors = JSON.parse(note.colors);

  let mouseStartPos = { x: 0, y: 0 };

  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    setZIndex(cardRef.current);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);

  }

  const mouseMove = (e) => {
    const mouseMoveDir = {
      x: e.clientX - mouseStartPos.x,
      y: e.clientY - mouseStartPos.y
    }

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    setPosition(newPosition);
  }

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  useEffect(() => {
    autoGrow(textAreaRef);
  });

  return (
    <div 
      ref={cardRef}
      className='rounded-md w-[30vw] absolute shadow-xl card' 
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}vw`,
        top: `${position.y}vh`
      }}          
    >
      
      <div 
        className='rounded-md p-2 flex justify-between items-center card-header' 
        style={{backgroundColor: colors.colorHeader}}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
      >
        <FaRegTrashCan />
      </div>

      <div>
        <textarea
          ref={textAreaRef}
          className='bg-inherit border-none resize-none w-full h-auto outline-none p-2 max-h-[70vh] overflow-auto'
          defaultValue={body}
          rows={4}
          onInput={() => autoGrow(textAreaRef)}
          onFocus={() => 
            setZIndex(cardRef.current)
          }
        >
        </textarea>
      </div>
    </div>
  )
}

export default NoteCard
