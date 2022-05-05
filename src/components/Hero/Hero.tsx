import { useStyles } from './Hero.styles';
import { Container, Title, Text, Button } from '@mantine/core';

type Props = {
  funcBook: ()=>void,
};

const Hero = ({funcBook}:Props) => {
  const { classes } = useStyles();
  return (
    <div id='hero' className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {'Learn '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'green', to: 'lightgreen' }}
              >
                GCSE Python
              </Text><br />
                {' from a professional '}<br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue' }}
              >
                Software Developer
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              Join my GCSE Computer Science & Python bootcamp to elevate your learning through small group live tutorials, homework challenges and individual support.
            </Text>
            
            {
              //TODO: add onclick to this button - do to book demo form
            }
            <Button
              variant="gradient"
              gradient={{ from: 'cyan', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={()=>funcBook()}
            >
              Book a free 30 minute demo 
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero