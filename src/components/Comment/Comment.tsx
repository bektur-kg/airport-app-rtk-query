import React, {FC} from 'react'
import {IUserComment} from "../../models/airports.models"
import cls from './Comment.module.scss'

interface ICommentProps {
  commentId: number
  userData: IUserComment
  created: Date
  commentText: string
}

const Comment: FC<ICommentProps> = (
  {
    commentId,
    commentText,
    userData,
    created
  }) => {



  return (
    <div className={cls.root}>
      <div className={cls.user}>
        <h4>{userData.username}</h4>
      </div>
      <div className={cls.text}>
        <p>
          {commentText}
        </p>
      </div>
      <div className={cls.date}>
        <time>{new Date(created).toLocaleDateString()}</time>
      </div>
    </div>
  );
};

export default Comment;
