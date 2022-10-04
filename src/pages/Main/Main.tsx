import React, {FC, useState} from 'react'
import cls from "./MainPage.module.scss"
import {useGetAirportsQuery} from "../../store/crm/airports/airports.api"
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loading";
import Pagination from "../../components/Pagination/Pagination";

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {data, isLoading, isError, isSuccess} = useGetAirportsQuery({
    search: '',
    page: currentPage
  })
  const PAGE_COUNT = Math.ceil(data ? data.count / 10 : 0)

  const onChangePage = (page: {selected: number}) => {
    setCurrentPage(page.selected + 1)
  }


  if (isLoading) return <div className={cls.loadingContainer}><Loader/></div>
  return (
    <div className={cls.root}>

      <ul className={cls.airportList}>
        {
          data?.results.map(airport => (
            <Card
              key={airport.id}
              {...airport}
            />
          ))
        }
      </ul>
      <div className={cls.pagination}>
        {
          isSuccess && (
            <Pagination
              pageCount={PAGE_COUNT}
              onClick={onChangePage}
              currentPage={currentPage}
            />
          )
        }
      </div>
    </div>
  )
}

export default Main
