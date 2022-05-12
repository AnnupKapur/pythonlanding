import React, { useState, useEffect } from 'react'
import { useStyles } from './Testamonials.style'
import TestmonialCard from './../TestamonialCard'
import FeedbackCard from './../FeedbackCard'

type Props = {}

const Testamonials = (props: Props) => {
  const { classes } = useStyles();
  const [objTestamonialData, setobjTestamonialData]:any = useState();

  useEffect(()=>{
    fetch("/data/testamonials.json").then((res)=> res.json()).then((data)=>setobjTestamonialData(data))
  },[])

  console.log(objTestamonialData);
  console.log(typeof objTestamonialData?.data);

  return (
    <div className={classes.wrapper}>
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
    </div>
  )
}

export default Testamonials