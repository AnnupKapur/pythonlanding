import React from 'react'
import { useStyles } from './About.styles'
import { 
  Container,
  Grid,
  Title,
  Text,
} from '@mantine/core';

type Props = {}

const About = (props: Props) => {
	const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Grid gutter='md'>
        <Grid.Col span={3}>a</Grid.Col>
        <Grid.Col span={9}>
          <Grid.Col>
            <Title>10+ years Software Developer</Title>
          </Grid.Col>
          <Grid.Col>
            <Title>15+ years Tutoring</Title>
          </Grid.Col>
          <Grid.Col>
            <Title>1000+ Successful Students</Title>
          </Grid.Col>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title>My code is being used by</Title>
        </Grid.Col>
        <Grid.Col span={12}>companies</Grid.Col>
      </Grid>
    </Container>
  )
}

export default About