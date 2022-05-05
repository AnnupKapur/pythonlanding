import { useEffect, useState } from 'react';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
} from '@mantine/core';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { useStyles } from './Contact.styles';

type Props = {
  postMsg:(
    name:string,
    phone: string,
    email: string,
    comments:string,
  ) => void;
  bDemoBookingClick:boolean,
}

const Contact = ({postMsg, bDemoBookingClick}:Props) => {
  const { classes } = useStyles();
  const [strInputName, setstrInputName] = useState('');
  const [strInputPhone, setstrInputPhone] = useState('');
  const [strInputEmail, setstrInputEmail] = useState('');
  const [strInputComment, setstrInputComment] = useState('');
  const [bNameError, setbNameError] = useState(false);
  const [bPhoneError, setbPhoneError] = useState(false);

  useEffect(()=>{
    setbNameError(false); 
    setbPhoneError(false);
  },[])

  useEffect(()=>{
    (strInputName.length>0) && setbNameError(false);
  }, [strInputName])

  useEffect(()=>{
    (strInputPhone.length>0) && setbPhoneError(false);
  }, [strInputPhone])

  const funcCheckSubmit = () => {
    if(strInputName.length===0){
      setbNameError(true);
    }

    if(strInputPhone.length===0){
      setbPhoneError(true);
    }

    if(strInputName.length>0 && strInputPhone.length>0){
      postMsg(
        strInputName,
        strInputPhone,
        strInputEmail,
        strInputComment
      )
    }
  }

  return (
    <div id='contact' className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>{bDemoBookingClick ? 'Free Demo Callback' : 'Contact'}</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            {bDemoBookingClick ? 
              'Leave your details and I will get back to you within 24 hours to book your FREE demo session' : 
              'Leave your details and I will get back to you within 24 hours'}
          </Text>
          <div className={classes.contactDetails}>

            <div className={classes.contactOption}>
              <div className={classes.contactIcon}><HiOutlinePhone size={30} /></div>
              <div className={classes.contactOptionDetails}>
                <Title order={4}>Phone</Title>
                <Text className={classes.contactOptionDetailsBody}>(+44) 07540195785</Text>
              </div>
            </div>

            <div className={classes.contactOption}>
              <div className={classes.contactIcon}><MdAlternateEmail size={30} /></div>
              <div className={classes.contactOptionDetails}>
                <Title order={4}>Email</Title>
                <Text className={classes.contactOptionDetailsBody}>Annup@Skittles.School</Text>
              </div>
            </div>

          </div>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Name"
            placeholder="Your Name"
            mt="md"
            required
            error={bNameError}
            onChange={(event)=>setstrInputName(event.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Phone"
            placeholder="XXXXX-XXXXXX"
            required
            mt="md"
            error={bPhoneError}
            onChange={(event)=>setstrInputPhone(event.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Email"
            placeholder="John Doe"
            mt="md"
            onChange={(event)=>setstrInputEmail(event.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            label="Comment"
            placeholder="Any comments"
            minRows={4}
            mt="md"
            onChange={(event)=>setstrInputComment(event.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          
          <div className={classes.errorText}>
            {(bNameError) && (<Text color="red" align='right'>Name is requried</Text>)}
            {(bPhoneError) && (<Text color="red" align='right'>Phone number is requried</Text>)}
          </div>

          <Group position="right" mt="md">
            <Button 
              className={classes.control}
              onClick={()=>funcCheckSubmit()}
              >
                Request A Callback
              </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default Contact;