import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent:'center',
		alignItems: 'center',
		color: theme.colors.green,

    [theme.fn.smallerThan('sm')]:{
      justifyContent:'space-evenly',
    },
	},

  content:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems:'center',
    [theme.fn.smallerThan('sm')]:{
      alignItems: 'center',
    },
  },
  
  checkmark:{
    [theme.fn.smallerThan('sm')]:{
      transform:'scale(0.7)'
    },
  },

	text_title:{
		textAlign: 'center',
    fontSize: '35px',
    fontWeight: '400',
    [theme.fn.smallerThan('sm')]:{
      fontSize: '25px',
    },
  },
  text_content:{
    color: theme.colors.gray,
    textAlign: 'center',
    fontSize: '25px',
    maxWidth: '800px',

    [theme.fn.smallerThan('sm')]:{
      width: '80%',
      fontSize: '18px',
    },
  },
  buttons_icons:{
    padding:'20px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'flex-start',
    gap: '15px',
    [theme.fn.smallerThan('sm')]:{
      maxWidth: '50%',
      flexWrap: 'wrap',
      transform: 'scale(1.5)',
      alignItems:'center',
    },
  },
  facebook:{},
  twitter:{},
  instagram:{},
  phone:{},
  email:{},
  home:{},
}));