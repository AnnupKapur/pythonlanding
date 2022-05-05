import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

  container:{
    padding: '50px 50px',
  },

  container__float:{
    borderRadius:5,
    // boxShadow: '5px 5px 20px -10px grey',

    [theme.fn.smallerThan('sm')]:{
      padding: '20px 20px',
      boxShadow: 'unset',
      borderRadius:'unset',
    }
  },

  bgBlue:{
    background:`linear-gradient(90deg, hsla(230, 90%, 90%, 0.3) 0%, hsla(180, 90%, 90%, 0.3) 100%)`,
  },

  text__title:{
    fontSize:25,
    [theme.fn.smallerThan('sm')]:{
      textAlign: "left",
    }
  },

  text__right:{
    textAlign:'right',
  },

  text__left:{
    textAlign:'left',
  },

  text__body:{
    [theme.fn.smallerThan('md')]:{
      textAlign:'justify',
    }
  },

  image:{
    transform: 'scale(0.8) perspective(300px) rotateY(-10deg)',
    transition: 'transform 1000ms ease-in-out',
    
    '&:hover':{
      transform: 'scale(0.8) perspective(5000px) rotateY(0)',
      transition: 'transform 1000ms ease-in-out',
    },

    [theme.fn.smallerThan('sm')]: {
      transform: 'none',
      '&:hover':{
        transform: 'none',
      },
    },
  }
}));