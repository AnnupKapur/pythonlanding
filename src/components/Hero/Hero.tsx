import React from 'react'
import { useStyles } from './Hero.styles'
import { Title, Text, Button } from '@mantine/core'
import BookButtons from '../BookButtons'

const Hero = () => {
	const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Title className={classes.title}>
        Learn
        <span className={[classes.text__highlight, classes.background__green].join(' ')}> GCSE Python </span>
        and
        <span className={[classes.text__highlight, classes.background__red].join(' ')}> Computer Science </span>
        from a professional
        <span className={[classes.text__highlight, classes.background__blue].join(' ')}> Software Developer </span>
      </Title>

      <BookButtons
        bShowBook={true}
        bShowDemo={true}
        bShowContact={false}
      />

      <div className={classes.container__image}>
        <img src={'./codeBlockSM.png'} className={classes.heroImage}/>
      </div>
    </div>
  )
}

export default Hero