import { useEffect, useState } from 'react';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  LoadingOverlay,
} from '@mantine/core';
import { HiOutlinePhone, HiBadgeCheck } from 'react-icons/hi';
import { IoReload } from 'react-icons/io5';
import { MdAlternateEmail } from 'react-icons/md';
import { VscError } from 'react-icons/vsc';
import { useStyles } from './Contact.styles';
import { HOMEPAGE_ELEMENTS } from '../../constants';

type Props = {
  bMsgError: boolean;
  setbMsgError: (
    bMsgError:boolean,
  )=>void;
  nstrMsgID: string | null;
  setnstrMsgID: (
    nstrMsgID:string | null,
  )=>void;
  postMsg:(
    name:string,
    phone: string,
    email: string,
    comments:string,
  ) => void;
}

const Contact = ({
  bMsgError,
  setbMsgError,
  postMsg,
  nstrMsgID,
  setnstrMsgID
  }:Props) => {
  const { classes } = useStyles();
  const [strInputName, setstrInputName] = useState('');
  const [strInputPhone, setstrInputPhone] = useState('');
  const [strInputEmail, setstrInputEmail] = useState('');
  const [strInputComment, setstrInputComment] = useState('');
  const [bNameError, setbNameError] = useState(false);
  const [bPhoneError, setbPhoneError] = useState(false);
  const [bLoading, setbLoading] = useState(false);

  useEffect(()=>{
    setbNameError(false); 
    setbPhoneError(false);
  },[])

  useEffect(()=>{
    if(nstrMsgID){
      setstrInputName('');
      setstrInputPhone('');
      setstrInputEmail('');
      setstrInputComment('');
    }

    if(nstrMsgID || bMsgError===true){
      setbLoading(false);
    }
  },[nstrMsgID, bMsgError])

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
    <div id={HOMEPAGE_ELEMENTS.CONTACT} className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your details and I will get back to you within 24 hours
          </Text>
          <div className={classes.contactDetails}>

            {/* ONLY FOR TESTING */}
            {/* <Button onClick={
              ()=>setnstrMsgID((nstrMsgID) ? null : 'some id')
            }>Toggle Test</Button>
            <Button onClick={
              ()=>setbMsgError(!bMsgError)
            }>Toggle error</Button> */}

            <div className={classes.contactOption}
              onClick={()=> window.open('tel:+4407540195785', '_self')}>
              <div className={classes.contactIcon}><HiOutlinePhone size={30} /></div>
              <div className={classes.contactOptionDetails}>
                <Title order={4}>Phone</Title>
                <Text
                  className={classes.contactOptionDetailsBody}>
                  (+44) 07540195785
                </Text>
              </div>
            </div>

            <div className={classes.contactOption} 
              onClick={()=> window.open('mailto:Annup@Skittles.School', '_self')}>
              <div className={classes.contactIcon}><MdAlternateEmail size={30} /></div>
              <div className={classes.contactOptionDetails}>
                <Title order={4}>Email</Title>
                <Text 
                  className={classes.contactOptionDetailsBody}>
                  Annup@Skittles.School
                </Text>
              </div>
            </div>

          </div>
        </div>

        {/* THE FORM */}
        {(!nstrMsgID && !bMsgError) && (
          <div className={classes.form}>
            <LoadingOverlay visible={bLoading} />
            <TextInput
              label="Name"
              placeholder="Your Name"
              mt="md"
              required
              value={strInputName}
              error={bNameError}
              onChange={(event)=>setstrInputName(event.target.value)}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Phone"
              placeholder="XXXXX-XXXXXX"
              mt="md"
              required
              value={strInputPhone}
              error={bPhoneError}
              onChange={(event)=>setstrInputPhone(event.target.value)}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Email"
              placeholder="John Doe"
              value={strInputEmail}
              mt="md"
              onChange={(event)=>setstrInputEmail(event.target.value)}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              label="Comment"
              placeholder="Any comments"
              minRows={4}
              value={strInputComment}
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
                onClick={() => {
                  setbLoading(true);
                  funcCheckSubmit();
                }}
                >
                  Request A Callback
                </Button>
            </Group>
          </div>
        )}


        {(bMsgError) && (
          <div id='messageErrorIndicator' className={
              [classes.form, classes.messageError].join(' ')
            }>
            <div className={classes.messageSent_confirm}>
              <VscError id='messageerrormark' className={classes.messageSent_checkmark} size={50}/>
              <Text>Oh no!</Text>
              <Text>Message cant send</Text>
              <Text>Please contact me directly instead</Text>
            </div>
            <div className={classes.messageSent_sendNew}>
              <Button 
                variant='subtle' 
                onClick={()=>setbMsgError(false)} 
                leftIcon={<IoReload />}
              >
                Try again
              </Button>
            </div>
          </div>
        )} 

        {(nstrMsgID) && (
          <div id='messageSentIndicator' className={
            [classes.form, classes.messageSent].join(' ')
          }>
            <div className={classes.messageSent_confirm}>
              <HiBadgeCheck id='messagesentcheck' className={classes.messageSent_checkmark} size={50}/>
              <Text>Thank you for your message !</Text>
              <Text>I'll get back to you soon</Text>
            </div>
            <div className={classes.messageSent_sendNew}>
              <Button 
                variant='subtle' 
                onClick={()=>setnstrMsgID(null)} 
                leftIcon={<IoReload />}
              >
                Send another
              </Button>
            </div>
          </div>
        )} 

      </SimpleGrid>
    </div>
  );
}

export default Contact;