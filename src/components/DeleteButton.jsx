import React from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'

const DeleteButton = ({}) => {

  const handleDelete = async () => {
    console.log("Clicked on delete button");
  }

  return (
    <div onClick={handleDelete} className="cursor-pointer">
      <FaRegTrashCan />
    </div>
  )
}

export default DeleteButton
