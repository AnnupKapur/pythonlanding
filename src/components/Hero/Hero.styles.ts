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

  container__image:{
    minHeight: '500px',
    width: '100%',
    background:
      'linear-gradient(0deg, hsla(0, 0%, 100%, 1) 50%, hsla(0,0%,100%, 0) 65%), url(/codeBlockSM.png) no-repeat center top',
    
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
      backgroundSize: '100%',
    }
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    boxShadow: '0px 0px 20px -4px grey',
    transition:'500ms ease-in-out',

    '&:hover':{
      boxShadow: '0px 0px 5px 0px grey',
      transition:'150ms ease-in-out',
      transform: 'scale(0.99)',
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 17,
    },
  },
}));