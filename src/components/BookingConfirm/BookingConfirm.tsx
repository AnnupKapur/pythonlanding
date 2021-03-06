import { useStyles } from './BookingConfirm.style'
import { 
  Title, 
  Text, 
  ActionIcon,
} from '@mantine/core'
import { FaCheckCircle, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt} from 'react-icons/fa'
import { IoHomeSharp } from 'react-icons/io5'
import { HiOutlineMail } from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'

type Props = {}

const BookingConfirm = ({}: Props) => {
  const { classes} = useStyles();
  const iconSize = 'xl';
  const iconStyle = 'filled';
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <FaCheckCircle className={classes.checkmark} size={60}/>
        <Title className={classes.text_title}>Booking Confirmed</Title>
        <Text className={classes.text_content}>
          <p>
            Look out for an automated email confirmation in the next few minutes. I will personally follow up via email / phone in the next 24 hours.
          </p>
          <p>
            You can now close this window. If you have any questions, or want to check out my socials, click one of the buttons below.
          </p>
        </Text>
      </div>
      <div className={classes.buttons_icons}>

        {/* PHONE */}
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          onClick={()=>window.open('tel:+4407540195785', '_self')}
          sx={(theme)=>({
            backgroundColor: theme.colors.green[5],
            '&:hover':{
              backgroundColor: theme.colors.green[8],
            },
          }
        )}>
          <FaPhoneAlt size={20}/>
        </ActionIcon>
        
        {/* EMAIL */}
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          onClick={()=>window.open('mailto:Annup@Skittles.School', '_self')}
          sx={(theme)=>({
            backgroundColor: theme.colors.red[6],
            '&:hover':{
              backgroundColor: theme.colors.red[9],
            },
          }
        )}>
          <HiOutlineMail size={25}/>
        </ActionIcon>

        {/* HOMEPAGE */}
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          sx={(theme)=>({
            backgroundColor: theme.colors.yellow[6],
            '&:hover':{
              backgroundColor: theme.colors.yellow[9],
            },
          })}
          onClick={()=> navigate('/', {replace:true})}
        >
          <IoHomeSharp size={20}/>
        </ActionIcon>

          {/* TWITTER */}
        <ActionIcon  variant={iconStyle} radius='xl' size={iconSize}
          onClick={()=>window.open('www.Twitter.com/Annup_Raj', '_self')}
          sx={(theme)=>({
            backgroundColor: theme.colors.blue[3],
            '&:hover':{
              backgroundColor: theme.colors.blue[6],
            },
          }
        )}>
          <FaTwitter size={20}/>
        </ActionIcon>
        
        {/* INSTAGRAM */}
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          onClick={()=>window.open('www.Instagram.com/SkittlesSchool', '_self')}
          sx={(theme)=>({
            backgroundColor: theme.colors.grape[4],
            '&:hover':{
              backgroundColor: theme.colors.grape[7],
            },
          }
        )}>
          <FaInstagram size={20}/>
        </ActionIcon>

        {/* FACEBOOK */}
        <ActionIcon variant={iconStyle} radius='xl' size={iconSize}
          onClick={()=>window.open('www.Facebook.com/SkittlesSchool', '_self')}
          sx={(theme)=>({
            backgroundColor: theme.colors.blue[6],
            '&:hover':{
              backgroundColor: theme.colors.blue[9],
            },
          }
        )}>
          <FaFacebookF size={20}/>
        </ActionIcon>

      </div>
    </div>
  )
}

export default BookingConfirm