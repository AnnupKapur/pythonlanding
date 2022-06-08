import React from 'react'
import { useStyles } from './BookButtons.style'
import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

type Props = {
	bShowDemo: boolean,
	bShowBook: boolean,
	bShowContact: boolean,
  strColor: string,
}

const BookButtons = ({
	bShowBook,
	bShowContact,
	bShowDemo,
  strColor
}: Props) => {
	const { classes } = useStyles();

  const navigate = useNavigate();

  return (
  <div className={classes.wrapper}>
    
    {(bShowBook) && (
      <Button
        variant="filled"
        size="xl"
        // color='green'
        style={{backgroundColor:strColor}}
        className={classes.btnBook}
        //onClick={}
        >
        {`< Join The Bootcamp />`}
      </Button>
    )}

    {(bShowDemo) && (
      <Button
        variant="outline"
        size="xl"
        style={{color: strColor, border:`2px solid ${strColor}`}}
        //className={classes.btnBook__outline}
        onClick={()=>{
          navigate('/bookdemo', {replace:true})
        }}
        >
        {`:: £1 Demo Session ::`}
      </Button>
    )}

    {(bShowContact) && (
      <Button
        variant="outline"
        size="xl"
        className={classes.btnBook}
        >
          Contact Us
      </Button>
    )}
		</div>
  )
}

export default BookButtons