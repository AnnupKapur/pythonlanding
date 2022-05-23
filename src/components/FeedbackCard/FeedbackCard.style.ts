import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

	wrapper:{
		display: 'flex', 
		flexDirection:'column', 
		alignItems:'center'
	},

	card:{
		display: 'flex',
		flexDirection:'column',
		width: '220px',
		// border:'0.5px solid hsla(140, 60%, 60%, 1)',
		//border:'1px solid hsla(100, 60%, 85%, 1)',
		borderRadius: '10px 10px 0 0',
		overflow:'hidden',
		boxShadow: '5px 5px 20px -10px grey',
		backgroundColor: 'white',
		//background: 'linear-gradient(30deg, hsla(140, 90%, 95%, 0.1) 30%, hsla(0, 100%, 100%, 1) 30%)',
	},
	
	top:{
		display: 'flex',
		flexDirection: 'column',
		padding: '40px 0px 0px 0px',
		alignItems: 'center',
		gap: '20px',
	},

	avatar:{
		transform: 'scale(1.2)',
	},

	text_name:{
		fontSize: '17px',
		fontWeight: '600',
		// fontStyle: 'oblique',
		color:'hsla(150, 50%, 50%, 1)',
		textAlign: 'center',
	},

	content:{
		margin: '10px 25px 25px 25px',
		height: '90px',
		overflow: 'hidden',
	},

	text_testamonial:{
		fontSize: '14px',
		textAlign: 'center',
		fontStyle: 'oblique',
		fontWeight: '600',
		color: 'hsla(0, 0%, 50%, 1)',
    lineHeight: '18px',
	},

	bottom:{
		display: 'flex',
		justifyContent: 'center',
		padding: '20px 0px',
		flexDirection: 'row',
		gap: '10px',
		color:'hsla(150, 70%, 95%, 1)',
		backgroundColor: 'hsla(140, 80%, 45%, 1)',
		width: '250px',
    position: 'relative',
    boxShadow: '0px -5px 20px -12px black, 0px 5px 20px -15px black',
    borderRadius:'0 0 5px 5px',

    [theme.fn.largerThan('sm')]:{
      width: '220px',
      boxShadow: '5px 5px 20px -10px grey',
    },

    '&:before':{
      content:"''",
      display: 'block',
      position: 'absolute',
      top:'-15px',
      left:'0px',
      width: 0,
      height: 0,
      borderBottom: '0px solid transparent',
      borderTop: '15px solid transparent',
      borderRight:'15px solid darkgreen', 

      [theme.fn.largerThan('sm')]:{
        display: 'none',
      },
    },

    '&:after':{
      content:"''",
      display: 'block',
      position: 'absolute',
      top:'-15px',
      right:'0px',
      width: 0,
      height: 0,
      borderBottom: '0px solid transparent',
      borderTop: '15px solid transparent',
      borderLeft:'15px solid darkgreen', 

      [theme.fn.largerThan('sm')]:{
        display: 'none',
      },
    },
	},

	star:{
		transform: 'scale(1.5)',
	}
}));