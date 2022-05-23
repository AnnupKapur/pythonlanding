import React, { useState } from 'react'
import { useStyles } from './BookDemo.styles'
import { 
  Input
} from '@mantine/core';

type Props = {}

const BookDemo = (props: Props) => {
  const { classes } = useStyles();


  return (
    <div className={classes.wrapper}>
      <iframe width='100%' height='100%' src='https://skittlesschool.zohobookings.eu/portal-embed#/customer/67288000000509292' frameBorder='0' allow-fullscreen='' > </iframe>
    </div>
  )
}

export default BookDemo