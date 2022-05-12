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

  const funcWrapperSelect = (intOption:number) => {
    switch(intOption){
      case 0:
        return classes.wrapper_red;
      case 1:
        return classes.wrapper_blue;
      case 2:
        return classes.wrapper_green;
      case 3:
        return classes.wrapper_purple;
      default:
        return classes.wrapper_grey;
    }
  }

  const funcGenerateStars = () => {
    let i = 0;
    let arrStars = [];
    const intWholeStars = Math.floor(parseFloat(strRatingNum)/2);
    const bHalfStar = (parseInt(strRatingNum)%2)>0 ? true : false;

    while(i<intWholeStars){
      arrStars.push(<IoIosStar />);
      i+=1;
    }

    if(bHalfStar){arrStars.push(<IoIosStarHalf />)};

    return arrStars;
  }

  return (
  <div 
  className={[classes.wrapper, funcWrapperSelect(intColorOption)].join(' ')}
  >

    <div className="top">
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

    <div className="content">
      <Text size="md" className={classes.text_testamonial}>{strTestamonial}</Text>
    </div>

    <div className={classes.bottom}>
      {funcGenerateStars()}
    </div>

  </div>
  )
}

export default FeedbackCard