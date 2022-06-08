import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
    padding: '50px 0px 60px 0px',

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
    padding: '0px 0px 50px 0px',
    gap: '30px',
    width: '500px',

    [theme.fn.smallerThan('sm')]:{
      gap: '50px',
      width: '60%',
      flexGrow:1,
    }
  },

  titleText:{
    fontSize:'25px',
    fontWeight: '300',
    [theme.fn.smallerThan('sm')]:{
      fontSize:'25px',
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