import { Title, Text, Image, Container, Grid} from '@mantine/core';
import { useStyles } from './../Component.styles';

type Props = {}

const Fundamentals = ({}: Props) => {
	const { classes } = useStyles();
  return (
    <Container className={classes.container} my='lg'>
      <Grid>
        <Grid.Col xs={8}>
          <Title className={[classes.text__title, classes.text__left].join(' ')}>
            <Text className={classes.text__title} component="span">{"Learn The "}</Text>
            <Text
             className={classes.text__title} 
              component="span"
              variant="gradient"
              gradient={{ from: 'cyan', to: 'green' }} >
                Fundamentals
            </Text>
          </Title>
          <Text className={[classes.text__body, classes.text__left].join(' ')}>
            <p>
              Building a strong core understanding of Computer Science via the Python language through a blend of guided instruction and regular challenges.
            </p>
            <p>
              This course is designed to cover all the topics required for the GCSE exam, plus more. Giving the student the best introduction into the world of software development, while also ensuring they maximise their success in the exam.
            </p>
          </Text>
        </Grid.Col>
        <Grid.Col xs={4}>
        <Image className={classes.image} src={'codeBlockSM.png'} />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Fundamentals