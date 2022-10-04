import React, {FC, useState} from 'react'
import cls from './AddComment.module.scss'
import {useCreateCommentMutation} from "../../store/crm/airports/airports.api"

export interface IAddCommentProps {
  airportId: string
}

const AddComment: FC<IAddCommentProps> = (
  {
    airportId,
  }) => {
  const [createComment, {isLoading}] = useCreateCommentMutation()
  const [commentText, setCommentText] = useState('')

  const createCommentHandle = async () => {
    try {
      createComment({
        commentText,
        airportId
      })
        .unwrap()
        .then(res => {
          console.log(res)
        })

    } catch (e) {

    }finally {
      setCommentText('')
    }

  }


  return (
    <div className={cls.root}>
      <span>Create a comment: </span>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        onClick={createCommentHandle}
        disabled={isLoading}
      >Create</button>
    </div>
  )
}

export default AddComment
