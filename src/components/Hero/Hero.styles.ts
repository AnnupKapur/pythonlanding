import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		padding:'30px 0 0 0',
		margin:0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent:'center',
		alignItems: 'center',
	},

	title:{
		textAlign:'center',
		width: '540px',
    color: theme.colors.dark,

		[theme.fn.smallerThan('sm')]: {
			width: 'calc(100% - 120px)',
      margin: '0 120px',
    }
	},

  text__highlight:{
    color:'white',
    padding: '0 10px',
    margin: '2px 5px',
    display: 'inline-block',
  },

  background__green:{
    background: 'linear-gradient(45deg, hsla(140, 100%, 30%, 1), hsla(180, 100%, 40%, 1))',
  },
  background__red:{
    background: 'linear-gradient(45deg, hsla(360, 100%, 50%, 1), hsla(300, 100%, 40%, 1))',
  },
  background__blue:{
    background: 'linear-gradient(45deg, hsla(220, 100%, 60%, 1), hsla(180, 100%, 40%, 1))',
  },

  // container__image:{
  //   minHeight: '500px',
  //   width: '100%',
  //   background:
  //     'linear-gradient(0deg, hsla(0, 0%, 100%, 1) 50%, hsla(0,0%,100%, 0) 65%), url(/codeBlockSM.png) no-repeat center top',
    
  //   [theme.fn.smallerThan('sm')]: {
  //     width: '100%',
  //     backgroundSize: '100%',
  //   }
  // },

  container__image:{
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    maxHeight:'300px',
    position: 'relative',
    overflow:'hidden',
    top:'-10px',
    zIndex: 0,
    '&:before':{
      content:"''",
      position: 'absolute',
      top: 0,
      left: 0,
      height:'100%',
      width:'100%',
      background: 'linear-gradient(0deg, hsla(0,0%,100%, 1) 0%, hsla(0,0%,100%, 0) 40%)',
    },
  },

  heroImage:{
    height:'100%',

    [theme.fn.smallerThan('sm')]:{
      width: '100%',
    },
  }
}));