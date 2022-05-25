import React from 'react'
import { useStyles } from './About.styles'
import { 
  Container,
  Grid,
  Title,
  Text,
  Image,
} from '@mantine/core';
import BookButtons from '../BookButtons';
import { HOMEPAGE_ELEMENTS } from './../../constants'

type Props = {}

const About = (props: Props) => {
	const { classes } = useStyles();

  return (
    <div id={HOMEPAGE_ELEMENTS.ABOUT} className={classes.wrapper}>
      <Title className={classes.section_title}>
        Why
        <span className={classes.section_title_highlight}> choose me </span>?</Title>
      <div className={classes.about}>
        <div className={classes.profile_photo}></div>
        <div className={classes.profile}>
          <div className={classes.profile_content}>
            <Title className={classes.profile_text_title}>
              For a tutoring tailored to you
            </Title>
            <Text className={classes.profile_text}>
              I understand that each and every student learns in their own unique way. In my
              <span className={classes.profile_text_highlight_blue_sm}>15 years of tutoring</span>
              experience, I have developed a learning system which is flexible and adapts to the needs the student. My small groups allow me to offer individualised learning while also promoting high quality peer support.
            </Text>
            <div className={classes.logos_title}>
                Where are my students studying / working now
              </div>
          </div>
          <div className={classes.logos}>
              <img
                src='./Images/logos/oxford.png'
                className={classes.logos_img}
              />
              <img
                src='./Images/logos/cambridge.jpg'
                className={classes.logos_img}
              />
              <img
                src='./Images/logos/uob.png'
                className={classes.logos_img}
              />
              <img
                src='./Images/logos/eton.jpg'
                className={classes.logos_img}
              />
            </div>
          <div className={classes.profile_content}>
            <Title className={classes.profile_text_title}>To learn from a real software developer</Title>
            <Text className={classes.profile_text}>
              Since completing my first class honours degree in computer science, I have been working as a software developer. With 
              <span className={classes.profile_text_highlight_blue_sm}>10+ years</span>
              of experience as a
              <span className={classes.profile_text_highlight_blue_sm}>full stack developer</span>
              , I know the best practices for all aspects of software development, from writing sustainable code, to designing efficient algorithms, I have done it all in a professional setting.</Text>
              <div className={classes.logos_title}>
                Some of the companies using my code *
              </div>
          </div>
          <div className={classes.logos}>
          </div>
        </div>
      </div>
      <BookButtons 
        bShowBook={true} 
        bShowDemo={true} 
        bShowContact={false} 
        strColor='hsla(200, 80%, 50%, 1)'/>
    </div> 
  )
}

export default About