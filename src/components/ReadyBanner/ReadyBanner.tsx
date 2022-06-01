import React from 'react'
import { useStyles } from './ReadyBanner.style'
import BookButtons from './../BookButtons'
import { Title, Text } from '@mantine/core'

type Props = {
  strColor:string;
}

const ReadyBanner = ({
  strColor
}: Props) => {
  const { classes } = useStyles();
  const arrColorInput = strColor.slice(5, -1).split(', ').map(element => parseInt(element));

  return (
    <div 
      className={classes.wrapper} 
      style={{
        backgroundColor:`hsla(
          ${arrColorInput[0]}, 
          ${arrColorInput[1]}%, 
          ${(arrColorInput[2]<=50) ? arrColorInput[2]+45 : 95}%, 
          ${arrColorInput[3]})`
        }}
    >
      <div className={classes.title}>
        <Title className={classes.titleText} 
          order={1} align='center' style={{color:strColor}}>
          How does my tutoring help students to achieve such amazing results ?
        </Title>
        <Title order={1} align='center'
          className={classes.titleText}
          style={{
            color:`hsla(
              ${arrColorInput[0]}, 
              ${arrColorInput[1]}%, 
              ${(arrColorInput[2]>25) ? arrColorInput[2]-10 : 25}%, 
              ${arrColorInput[3]})`
          }}
        >
          Book a FREE demo session and let me show you
        </Title>
      </div>
      <BookButtons 
        bShowBook
        bShowDemo
        bShowContact={false}
        strColor={strColor}
      />
    </div>
  )
}

export default ReadyBanner