import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		flexWrap: 'wrap',
		display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
		gap: '40px',
    //background: 'linear-gradient(0deg, white 0%, hsla(160, 30%, 50%, 0.2) 40%, hsla(160, 30%, 50%, 0.2) 60%, white 100%)',
    backgroundColor: 'hsla(140, 80%, 90%, 0.5)',
    padding: '50px 20px',
	},

  text_title:{
    color: theme.colors.green,
    textAlign: 'center',
    padding: '20px 0px',
  },

  text_highlight:{
    display: 'inline-block',
    //background: 'linear-gradient(45deg, hsla(140, 100%, 30%, 1), hsla(180, 100%, 40%, 1))',
    background: 'linear-gradient(45deg, hsla(140, 80%, 45%, 1), hsla(180, 100%, 40%, 1))',
		//backgroundColor: 'hsla(140, 80%, 45%, 1)',
    padding: '5px 15px',
    margin: '0px 13px',
    color: 'white',
    boxShadow: '10px 10px 20px -10px green',
    borderRadius: '5px',
  },

  cards:{
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    flexFlow: 'row wrap',
    justifyContent: 'center',
		gap: '30px',

    [theme.fn.smallerThan('sm')]:{
      display: 'none',
    }
  },

  carousel:{
    display: 'block',
    [theme.fn.largerThan('sm')]:{
      height:'0px',
      overflow: 'hidden',
    },
  },
}));