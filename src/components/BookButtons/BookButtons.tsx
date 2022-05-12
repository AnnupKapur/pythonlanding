import React from 'react'
import { useStyles } from './BookButtons.style'
import { Title, Text, Button } from '@mantine/core'

type Props = {
	bShowDemo: boolean,
	bShowBook: boolean,
	bShowContact: boolean,
}

const BookButtons = ({
	bShowBook,
	bShowContact,
	bShowDemo
}: Props) => {
	const { classes } = useStyles();

  return (
  <div className={classes.wrapper}>
    
    {(bShowBook) && (
      <Button
        variant="filled"
        size="xl"
        color='green'
        className={classes.btnBook}
        //onClick={}
        >
        {`< Join The Bootcamp />`}
      </Button>
    )}

    {(bShowDemo) && (
      <Button
        variant="outline"
        color='green'
        size="xl"
        className={classes.btnBook}
        //onClick={}
        >
        {`:: Free Demo Session ::`}
      </Button>
    )}

    {(bShowContact) && (
      <Button
        variant="outline"
        size="xl"
        className={classes.btnBook}
        //onClick={}
        >
          Contact Us
      </Button>
    )}
		</div>
  )
}

export default BookButtons