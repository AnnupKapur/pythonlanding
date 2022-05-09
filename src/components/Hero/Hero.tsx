import React from 'react'
import { useStyles } from './Hero.styles'
import { Title, Text, Button } from '@mantine/core'

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

      <Button
        variant="gradient"
        gradient={{ from: 'cyan', to: 'green' }}
        size="xl"
        className={classes.control}
        //onClick={}
        mt={40}>
        Book a free 30 minute demo 
      </Button>

      <div className={classes.container__image}>
      </div>
    </div>
  )
}

export default Hero