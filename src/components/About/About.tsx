import React from 'react'
import { useStyles } from './About.styles'
import { 
  Container,
  Grid,
  Title,
  Text,
} from '@mantine/core';

type Props = {}

const About = (props: Props) => {
	const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.profile__photo__container}></div>
    </div> 
  )
}

export default About