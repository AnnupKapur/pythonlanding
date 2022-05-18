import React, { useState } from 'react'
import { useStyles } from './BookDemo.styles'
import { 
  Input
} from '@mantine/core';

type Props = {}

const BookDemo = (props: Props) => {
  const { classes } = useStyles();
  const [dateSelect, setdateSelect] = useState<string | null>();

  return (
    <div className={classes.wrapper}>

      {
        // CALENDAR
      }

      {
        // STUDENT NAME AND DOB
      }

      {(dateSelect) && (
        <Input placeholder='John Adams' />
      )}

      {
        // IF MINOR : PARENT (NAME, PHONE, EMAIL)
        // IF ADULT : STUDENT PHONE AND EMAIL
      }

      {
        // AGREEMENT
      }


    </div>
  )
}

export default BookDemo