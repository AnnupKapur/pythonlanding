import React, { useState, useEffect } from 'react'
import { useStyles } from './Testamonials.style'
import {Title, Text } from '@mantine/core';
import FeedbackCard from './../FeedbackCard'

// @ts-ignore
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';

type Props = {}

const Testamonials = (props: Props) => {
  const { classes } = useStyles();
  const [objTestamonialData, setobjTestamonialData]:any = useState();

  useEffect(()=>{
    fetch("/data/testamonials.json").then((res)=> res.json()).then((data)=>setobjTestamonialData(data))
  },[])

  return (
    <div className={classes.wrapper}>
      <Title className={classes.text_title}>
        What are other
        <span className={classes.text_highlight}> happy students </span>
        saying?
      </Title>
      <div className={classes.cards}>
      {(typeof objTestamonialData === "object") && (
        objTestamonialData.data.map((data:any)=>
          (objTestamonialData.data.indexOf(data) < 5) && (
          <FeedbackCard
            key={objTestamonialData.data.indexOf(data)}
            strName={data['name']}
            strPhotoURL={data['profilePhoto']}
            strTestamonial={data['testamonial']}
            intColorOption={Math.floor(Math.random()*3)}
            strRatingNum={data.rating}
          />
          )
        )
      )}
      </div>

      <Carousel className={classes.carousel} plugins={['arrows']}>
      {(typeof objTestamonialData === "object") && (
        objTestamonialData.data.map((data:any)=>
          <FeedbackCard
            key={objTestamonialData.data.indexOf(data)}
            strName={data['name']}
            strPhotoURL={data['profilePhoto']}
            strTestamonial={data['testamonial']}
            intColorOption={Math.floor(Math.random()*3)}
            strRatingNum={data.rating}
          />
          )
      )}
      </Carousel>
    </div>
  )
}

export default Testamonials