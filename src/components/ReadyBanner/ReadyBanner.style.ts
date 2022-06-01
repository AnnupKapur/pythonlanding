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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 0px 50px 0px',
    gap: '10px',

    [theme.fn.smallerThan('sm')]:{
      fontSize:'20px',
      padding: '0px 20px 50px 20px',
    }
  },

  titleText:{
    [theme.fn.smallerThan('sm')]:{
      fontSize:'25px',
    }
  },

}));