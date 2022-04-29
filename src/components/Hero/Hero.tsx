import React from 'react';
import { createStyles, Container, Title, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('xs')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    },
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
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
                Python
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
            >
              Book a free 30 minute demo with me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero