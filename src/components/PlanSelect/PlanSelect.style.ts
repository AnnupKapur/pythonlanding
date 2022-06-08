import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper:{
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',
    justifyContent: 'space-between',
  },

  plans:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
  },

  plan:{
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid grey',
  },

  price:{},

  priceNumbers:{},

  textHighlightPositive:{},

  textHighlightNegative:{},
  
  btnNext:{
  },
}));