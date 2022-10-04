import React, {FC} from 'react'
import {ICardProp} from "../../models/components.models"
import cls from './Card.module.scss'
import {useNavigate} from "react-router-dom";

const Card: FC<ICardProp> = (
  {
    id,
    ident,
    local_code,
    name,
    region,
    country,
    type
  }
) => {
  const navigate = useNavigate()

  return (
    <li className={cls.root}>
      <div className={cls.container}>
        <h1>{name}</h1>
        <span>Type: <span>{type}</span></span>
        <span>Country: <span>{country}</span></span>
        <span>Region: <span>{region}</span></span>
        <span>Ident: <span>{ident}</span></span>
        <span>Local Code: <span>{local_code ? local_code : 'none'}</span></span>
        <button
          className={cls.cardButton}
          onClick={() => navigate(`/airport-detail/${id}`)}
        >Подбробнее</button>
      </div>
    </li>
  );
};

export default Card;
