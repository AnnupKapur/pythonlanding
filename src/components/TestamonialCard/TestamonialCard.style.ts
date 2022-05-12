import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '20px',
		width: `${Math.floor(Math.random() * ((350 - 300 ) + 1)+300)}px`,
		border: '1px solid hsla(300, 30%, 40%, 0.1)',
		borderRadius: '5px',
		padding: '20px',
	},

	wrapper_0:{
		background: 'linear-gradient(30deg, hsla(0, 100%, 60%, 1) 10%, hsla(0, 100%, 70%, 1) 100%)',
		border: '1px solid hsla(0, 100%, 70%, 0.1)',
		color:'white',
		boxShadow: '10px 10px 20px -10px hsla(0, 100%, 60%, 1)',
	},
	wrapper_1:{
		background: 'linear-gradient(30deg, hsla(200, 100%, 45%, 1) 10%, hsla(200, 100%, 60%, 1) 100%)',
		border: '1px solid hsla(200, 100%, 55%, 0.1)',
		color:'white',
		boxShadow: '10px 10px 20px -10px hsla(200, 100%, 55%, 1)',
	},
	wrapper_2:{
		background: 'linear-gradient(30deg, hsla(124, 50%, 40%, 1) 10%, hsla(124, 50%, 50%, 1) 100%)',
		border: '1px solid hsla(124, 100%, 50%, 0.1)',
		color:'white',
		boxShadow: '10px 10px 20px -10px hsla(124, 100%, 50%, 1)',
	},
	wrapper_3:{
		background: 'linear-gradient(40deg, white 40%, whitesmoke 100%)',
	},

	top: {

	},

  avatar:{
    border:'1px solid white',
  },

	bottom:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'left',
		gap: '30px',
		alignItems: 'center',
	},

	text_testamonial:{
    fontWeight: 500,
	},

	text_name:{
	}

}));