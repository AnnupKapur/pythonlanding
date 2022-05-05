import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center 25%',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(/hero1.jpg)',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,

    borderBottom:'10px lightgreen solid',

    [theme.fn.smallerThan('md')]: {
      backgroundPosition: 'center 40%',
      backgroundImage:
        'radial-gradient(circle at 130% -10%, rgba(130, 201, 30, 0) -90%, #062343 65%), url(/hero1.jpg)',
    },
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
      padding:0,
      fontSize: 17,
    },
  },
}));