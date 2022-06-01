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
      <div className={classes.about}>
        <div className={classes.profile_photo}></div>
        <div className={classes.profile}>
          <div className={classes.profile_content}>
            <Title order={3} className={classes.profile_text_title}>
              Tutoring 
              <span className={classes.section_title_highlight}>tailored to you</span>
            </Title>
            <Text className={classes.profile_text}>
              I understand that each and every student learns in their own unique way. In my
              <span className={classes.profile_text_highlight_blue_sm}>15 years of tutoring</span>
              experience, I have developed a learning system which is flexible and adapts to the needs of every student. My small groups allow me to offer individualised learning while also promoting high quality peer support.
            </Text>
            <Title className={classes.logos_title}>
                Where are my students studying / working now
            </Title>
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
                src='./Images/logos/amazon.png'
                className={classes.logos_img}
              />
              <img
                src='./Images/logos/mslogo.jpg'
                className={classes.logos_img}
              />
            </div>
          <div className={classes.profile_content}>
            <Title order={3} className={classes.profile_text_title}>
              Learn from a pro
              <span className={classes.section_title_highlight}> software developer</span>
            </Title>
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
            <img
              src='./Images/logos/gousto.png'
              className={classes.logos_img}
            />
            <img
              src='./Images/logos/gladstonebrookes.png'
              className={classes.logos_img}
            />
            <img
              src='./Images/logos/o2.png'
              className={classes.logos_img}
            />
            <img
              src='./Images/logos/optegra.png'
              className={classes.logos_img}
            />
            <img
              src='./Images/logos/hubenergy.png'
              className={classes.logos_img}
            />
          </div>
        </div>
      </div>
    </div> 
  )
}

export default About