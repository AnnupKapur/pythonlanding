import { Title, Text, Image, SimpleGrid, Container, Grid} from '@mantine/core';
import { useStyles } from './../Component.styles';

type Props = {}

const About = ({}: Props) => {
	const { classes } = useStyles();
  return (

    <Container className={[classes.container, classes.bgBlue, classes.container__float].join(' ')}>
      <Grid>
        <Grid.Col xs={4}>
          <Image className={classes.image} src={'codeBlockSM.png'} />
        </Grid.Col>
        <Grid.Col xs={8}>
          <Title className={[classes.text__title, classes.text__right].join(' ')}>
          <Text className={classes.text__title} component="span" >
            {"From A "}
          </Text>
          <Text
            className={classes.text__title} 
            component="span"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Software Developer
          </Text>
          </Title>
          <Text className={[classes.text__body, classes.text__right].join(' ')}>
          <p>
            A First class honours degree in Computer Science, graduating top of my class. I have over 10 years experience as a professional software developer. My code is being used by some of the largest companies in the world in a range of sectors, from telecommunications to insurance, healthcare to food delivery.
          </p>
          <p>
            iconography
          </p>
        </Text>
        </Grid.Col>
      </Grid>
    </Container>

    // <div className={classes.main}>
    //   <div className={classes.imageArea}>
    //     <Image
    //       className={classes.image}
    //       src={'codeBlockSM.png'}
    //     />
    //   </div>
    //   <div className={classes.content}>
    //     <Title className={classes.title}>
    //       <Text className={classes.title__text}
    //         component="span"
    //       >
    //         {"From A "}
    //       </Text>
    //       <Text
    //         className={classes.title__text} 
    //         component="span"
    //         variant="gradient"
    //         gradient={{ from: 'blue', to: 'cyan' }}
    //       >
    //         Software Developer
    //       </Text>
    //     </Title>
    //     <Text>
    //       <p>
    //         First class honours degree in Computer Science, graduating top of my class. I have over 10 years experience as a professional software developer. My code is being used by some of the largest companies in the world in a range of sectors, from telecommunications to insurance, healthcare to food delivery.
    //       </p>
    //     </Text>
    //   </div>
    // </div>
  )
}

export default About