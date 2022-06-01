import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

	wrapper:{
		padding:'80px 0 0 0',
		margin:0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent:'center',
		alignItems: 'center',
    gap: '50px',
    position: 'relative',
    zIndex: 10,
    // backgroundColor: 'hsla(190, 80%, 90%, 0.5)',
    backgroundColor: 'white',

    '&:before':{
      content:"''",
      height: '80%',
      position: 'absolute',
      width: '100%',
      // backgroundColor: 'white',
      top: '0px',
      left: '0px',
      zIndex: 0,
      backgroundColor: 'hsla(140, 90%, 80%, 0.5)',

      [theme.fn.smallerThan('sm')]: {
      height: '80%',
      }
    }
	},

	title:{
		width: '700px',
    color: theme.colors.dark,
    paddingBottom: '40px',
    zIndex: 10,
    fontSize:'40px',

    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',


		[theme.fn.smallerThan('sm')]: {
			width: 'calc(100% - 50px)',
      fontSize:'30px',
    }
	},

  text__highlight:{
    color:'white',
    padding: '0 10px',
    margin: '2px 5px',
    borderRadius: '5px',
    zIndex: 10,

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      fontSize: '30px',
      backgroundColor: 'white',
    }
  },

  background__green:{
    background: 'linear-gradient(45deg, hsla(140, 80%, 45%, 1), hsla(180, 100%, 40%, 1))',
  },
  background__red:{
    textDecoration:'highlight',
    background: 'linear-gradient(45deg, hsla(360, 100%, 50%, 1), hsla(300, 100%, 40%, 1))',
  },
  background__blue:{
    background: 'linear-gradient(45deg, hsla(220, 100%, 60%, 1), hsla(180, 100%, 40%, 1))',
  },

  container__image:{
    display: 'flex',
    justifyContent:'center',
    zIndex: 10,
  },

  heroImage:{
    width:'800px',
    zIndex: 10,

    [theme.fn.smallerThan('sm')]:{
      width: '100%',
    },
  }
}));