import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper:{
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',
    justifyContent: 'flex-start',
  },

  title:{
    textAlign: 'center',
    paddingTop: '50px',
    fontWeight: '200'
  },

  plans:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    alignItems:'center',
    flexGrow:1,
  },

  plan:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid hsla(0, 0%, 100%, 1)',
    boxShadow: '2px 2px 10px -3px black',
    transition: '300ms ease-in-out',
    width: '400px',

    '&:hover':{
      border: '1px solid hsla(150, 90%, 50%, 0.5)',
      backgroundColor: 'hsla(150, 90%, 50%, 0.5)',
      boxShadow: '5px 5px 20px -6px black',
      transition: '300ms ease-in-out',
      // transform: 'translate(-2px, -2px)',
      transform: 'translate(-5px, -5px) scale(1.01)'
    },
  },

  regularity:{},

  price:{
    padding: '20px 0px',
    fontSize: '17px',
    fontWeight: '800',
    textAlign: 'center',
  },

  priceNumbers:{
    fontSize: '60px',
    fontWeight: '200',
  },

  cardContent:{
    textAlign: 'center',
    fontSize: '18px',
  },

  textHighlightPositive:{},

  textHighlightNegative:{},

  subtext:{
    margin: '30px 0 0 0',
    textAlign: 'center',
  },
  
}));