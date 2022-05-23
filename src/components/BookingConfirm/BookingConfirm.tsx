import React from 'react'
import { useStyles } from './BookingConfirm.style'
import { 
  Title, 
  Text, 
  ActionIcon 
} from '@mantine/core'
import { FaCheckCircle, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt} from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { IoHomeSharp } from 'react-icons/io5'

type Props = {}

const BookingConfirm = ({}: Props) => {
  const { classes} = useStyles();

  return (
    <div className={classes.wrapper}>
      <FaCheckCircle size={60}/>
      <Title className={classes.text_title}>Booking Confirmed</Title>
      <Text className={classes.text_content}>
        <p>
        You will recieve an automatic email confirmation in the next few minutes and a personal follow-up email / phone call from me very soon.
        </p>
        You can now close this window, or click one of the buttons below
      </Text>
      <div className={classes.buttons_icons}>

        <ActionIcon variant='filled' radius='xl' size='lg' className={classes.facebook}>
          <FaFacebookF size={20}/>
        </ActionIcon>

        <ActionIcon  variant='filled' radius='xl' size='lg' className={classes.twitter}>
          <FaTwitter size={20}/>
        </ActionIcon>
        
        <ActionIcon variant='filled' radius='xl' size='lg' className={classes.instagram}>
          <FaInstagram size={20}/>
        </ActionIcon>

        <ActionIcon variant='filled' radius='xl' size='lg' className={classes.phone}>
          <FaPhoneAlt size={20}/>
        </ActionIcon>
        
        <ActionIcon variant='filled' radius='xl' size='lg' className={classes.email}>
          <MdAlternateEmail size={20}/>
        </ActionIcon>
        
        <ActionIcon variant='filled' radius='xl' size='lg' className={classes.home}>
          <IoHomeSharp size={20}/>
        </ActionIcon>
      </div>
    </div>
  )
}

export default BookingConfirm