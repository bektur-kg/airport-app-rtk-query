import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetAirportCommentsQuery, useGetExactAirportQuery} from "../../store/crm/airports/airports.api"
import cls from './AirportDetail.module.scss'
import Loader from "../../components/Loader/Loading"
import AddComment from "../../components/AddComment/AddComment"
import Comment from "../../components/Comment/Comment"
import {BiArrowBack} from "react-icons/bi"
import Pagination from "../../components/Pagination/Pagination"


const AirportDetail = () => {
  const {id} = useParams<'id'>()
  const navigate = useNavigate()
  const {data, isLoading, error} = useGetExactAirportQuery(id!)
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data: commentData,
    isLoading: isCommentLoading,
    error: commentError
  } = useGetAirportCommentsQuery({
    airportId: id!,
    page: currentPage
  })
  const PAGE_COUNT = Math.ceil(commentData ? commentData.count / 7 : 0)



  const changePage = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1)
  }

  if (isLoading) return <div className={cls.loading}><Loader/></div>
  return (
    <>
      <div
        className={cls.back}
        onClick={() => navigate('/')}
      >
        <BiArrowBack/>
      </div>

      <div className={cls.root}>
        <div className={cls.container}>
          <h2>{data?.airport_name}</h2>
          <ul className={cls.details}>
            {
              data?.details.map(item => (
                <li key={item[0]}>
                  <p className={cls.key}>{item[0]}</p>
                  <p className={cls.value}>{item[1] ? item[1] : 'none'}</p>
                </li>
              ))
            }
          </ul>

          <div className={cls.commentContainer}>
            <div className={cls.create}>
              <AddComment airportId={id!}/>
            </div>
            <ul className={cls.list}>
              {
                commentData?.results.map(comment => (
                  <Comment
                    key={comment.id}
                    commentId={comment.id}
                    userData={comment.user}
                    created={comment.created}
                    commentText={comment.comment}
                  />
                ))
              }
            </ul>
            <div className={cls.pagination}>
              {
                !isCommentLoading && (
                  <Pagination
                    pageCount={PAGE_COUNT}
                    currentPage={currentPage}
                    onClick={changePage}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirportDetail
