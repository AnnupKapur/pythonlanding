import React from 'react'
import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import { useStyles } from './TestamonialCard.style'

type Props = {
	strName:string,
	strPhotoURL: string,
	strTestamonial: string,
  intColorOption: number,
}

const TestamonialCard = ({
	strName,
	strPhotoURL,
	strTestamonial,
  intColorOption,
}: Props) => {
	const { classes } = useStyles();

  const funcClassChoice = () => {
    switch(intColorOption){
      case 0:
        return classes.wrapper_0;
      case 1:
        return classes.wrapper_1;
      case 2:
        return classes.wrapper_2;
      case 3:
        return classes.wrapper_3;
      default:
        return '';
    }
  }

  return ( 
  <div 
  className={[classes.wrapper, funcClassChoice()].join(' ')}
  >
    <div className={classes.top}>
    <Text size="md" className={classes.text_testamonial}>{strTestamonial}</Text>
    </div>
    <div className={classes.bottom}>
    <Avatar 
        src={strPhotoURL} 
        className={classes.avatar}
        alt={strName}
        radius='xl'
        size='lg'
      >
      {(typeof strPhotoURL === "string") && (strName)}
    </Avatar>
      <Text size="md" className={classes.text_name}>{strName}</Text>
    </div>
  </div>
  )
}

export default TestamonialCard