import React from 'react'
import { useStyles } from './BookingConfirm.style'
import { 
  Title, 
  Text, 
  ActionIcon,
} from '@mantine/core'
import { FaCheckCircle, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt} from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { IoHomeSharp } from 'react-icons/io5'

type Props = {}

const BookingConfirm = ({}: Props) => {
  const { classes} = useStyles();
  const iconSize = 'xl';
  const iconStyle = 'filled';

  return (
    <div className={classes.wrapper}>
      <FaCheckCircle size={60}/>
      <Title className={classes.text_title}>Booking Confirmed</Title>
      <Text className={classes.text_content}>
        <p>
        Look out for an automated email confirmation in the next few minutes. I will personally follow up via email / phone in the next 24 hours.
        </p>
        <p>
        You can now close this window. If you have any questions, or want to check out my socials, click one of the buttons below.
        </p>
      </Text>
      <div className={classes.buttons_icons}>

        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          sx={(theme)=>({
            backgroundColor: theme.colors.green[5],
            '&:hover':{
              backgroundColor: theme.colors.green[8],
            },
          }
        )}>
          <FaPhoneAlt size={20}/>
        </ActionIcon>
        
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          sx={(theme)=>({
            backgroundColor: theme.colors.red[6],
            '&:hover':{
              backgroundColor: theme.colors.red[9],
            },
          }
        )}>
          <MdAlternateEmail size={20}/>
        </ActionIcon>

        <ActionIcon variant={iconStyle} radius='xl' size={iconSize} 
          sx={(theme)=>({
            backgroundColor: theme.colors.blue[6],
            '&:hover':{
              backgroundColor: theme.colors.blue[9],
            },
          }
        )}>
          <FaFacebookF size={20}/>
        </ActionIcon>

        <ActionIcon  variant={iconStyle} radius='xl' size={iconSize}
          sx={(theme)=>({
            backgroundColor: theme.colors.blue[3],
            '&:hover':{
              backgroundColor: theme.colors.blue[6],
            },
          }
        )}>
          <FaTwitter size={20}/>
        </ActionIcon>
        
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          sx={(theme)=>({
            backgroundColor: theme.colors.grape[4],
            '&:hover':{
              backgroundColor: theme.colors.grape[7],
            },
          }
        )}>
          <FaInstagram size={20}/>
        </ActionIcon>
        
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          sx={(theme)=>({
            backgroundColor: theme.colors.yellow[6],
            '&:hover':{
              backgroundColor: theme.colors.yellow[9],
            },
          }
        )}>
          <IoHomeSharp size={20}/>
        </ActionIcon>
      </div>
    </div>
  )
}

export default BookingConfirm