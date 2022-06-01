import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
    padding: '100px 0px',

    [theme.fn.smallerThan('sm')]:{
      justifyContent: 'center',
      height: '100vh',
      padding: 0,
    }
	},

  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 50px 0px',
    gap: '10px',

    [theme.fn.smallerThan('sm')]:{
      fontSize:'20px',
      width: '80%',
      gap: '50px',
      flexGrow:1,
    }
  },

  titleText:{
    [theme.fn.smallerThan('sm')]:{
      fontSize:'23zpx',
    }
  },

  buttonSection:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  SubSection:{
    display: 'flex',
    flexDirection: 'column',
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleSubText:{
    display: 'none',

    [theme.fn.smallerThan('sm')]:{
      display: 'block',
      width: '80%',
      fontSize: '18px',
      fontWeight: '600',
    }
  },
}));