import React, { useState } from 'react'
import { useStyles } from './BookDemo.styles'
import { 
  Input
} from '@mantine/core';

type Props = {}

const BookDemo = (props: Props) => {
  const { classes } = useStyles();
  const [nstrDemoDate, setnstrDemoDate] = useState<string | null>();
  const [nstrStudentName, setnstrStudentName] = useState<string | null>();
  const [nstrStudentDOB, setnstrStudentDOB] = useState<string | null>();
  const [nstrParentName, setnstrParentName] = useState<string | null>();
  const [strPhone, setnstrPhone] = useState<string>();
  const [strEmail, setstrEmail] = useState<string>();

  return (
    <div className={classes.wrapper}>

      {
        // CALENDAR
      }

      {
        // STUDENT NAME AND DOB
      }

      {(nstrDemoDate) && (
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