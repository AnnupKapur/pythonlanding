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
    hegiht: '100vh',
	},

  stepperRoot: {
    minHeight: '100vh',
  },

  stepper:{
    margin: '0px 50px',
    padding: '50px 0px',
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
    height: '100%',
  },

  closeButton:{
    position: 'absolute',
    top:50,
    right:50,
  },

	buttonContainer:{
		background: theme.colors.gray[5],
		width: '100%',
		height: 100,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		left: 0,
	},

}));