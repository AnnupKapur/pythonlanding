import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

	wrapper:{
		display: 'flex', 
		flexDirection:'column', 
		alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: `${theme.colors.teal[9]}30`,
    position: 'relative',
    maxHegiht: '100vh',
    overflow: 'hidden',
	},

  stepperRoot: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },

  stepper:{
    display: 'flex',
    margin: '0 120px 0px 120px',
    height: '100px',
  },

  step:{
    [theme.fn.smallerThan('md')]:{
      display: 'none',
    },
  },

  stepProgress:{
    [theme.fn.smallerThan('md')]:{
      display: 'flex',
      width: '100%'
    },
  },

  stepLabel:{
    [theme.fn.smallerThan('md')]:{
    }
  },

  stepContent:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    width: '100vw',
  },

  backButton:{
    position: 'absolute',
    top:30,
    left:30,
  },
  
  closeButton:{
    position: 'absolute',
    top:30,
    right:30,
  },

	buttonContainer:{
		background: theme.colors.gray[5],
    width: '100%',
		height: 100,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
    flexGrow: 1,
    padding: '20px 0px',
		bottom: 0,
		left: 0,
    boxShadow: '0px -10px 30px -20px black',
    zIndex: 10000,
    borderRadius: '20px 20px 0 0',
	},

  buttonRoot:{
    backgroundColor: theme.colors.green[8],
    height: 70,
    width: 300,
    fontSize: '1.3rem',
    '&:hover':{
      backgroundColor: theme.colors.green[8],
    },
  },

}));