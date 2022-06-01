import React from 'react'
import { Text, Avatar } from '@mantine/core';
import { useStyles } from './FeedbackCard.style'
import { IoIosStar, IoIosStarHalf} from 'react-icons/io'

type Props = {
	strName:string,
	strPhotoURL: string,
	strTestamonial: string,
  intColorOption: number,
  strRatingNum:string,
}

const FeedbackCard = ({
	strName,
	strPhotoURL,
	strTestamonial,
  intColorOption,
  strRatingNum,
}: Props) => {
	const { classes } = useStyles();

  const funcGenerateStars = () => {
    let i = 0;
    let arrStars = [];
    const intWholeStars = Math.floor(parseFloat(strRatingNum)/2);
    const bHalfStar = (parseInt(strRatingNum)%2)>0 ? true : false;

    while(i<intWholeStars){
      arrStars.push(<IoIosStar className={classes.star} />);
      i+=1;
    }

    if(bHalfStar){arrStars.push(<IoIosStarHalf className={classes.star} />)};

    return arrStars;
  }

  return (
  <div className={classes.wrapper}>
    <div className={classes.card}>
      
      <div className={classes.top}>
        <Avatar 
          src={strPhotoURL} 
          className={classes.avatar}
          alt={strName}
          radius='xl'
          size='lg'
        >
        {(typeof strPhotoURL === "string") && (strName)}
        </Avatar>
        <Text size="md" className={classes.text_name}>
          {strName}
        </Text>
      </div>

      <div className={classes.content}>
        <Text size="md" lineClamp={5} className={classes.text_testamonial}>{strTestamonial}</Text>
      </div>

    </div>
    
    <div className={classes.bottom}>
      {funcGenerateStars()}
    </div>

  </div>
  )
}

export default FeedbackCard