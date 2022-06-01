import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'center',
		width: '100%',
		gap:'10px',
		zIndex: 50,

		[theme.fn.smallerThan('sm')]:{
			flexDirection:'column',
			alignItems:'center',
			gap:'20px',
		}
	},

	btnBook:{
		[theme.fn.smallerThan('sm')]:{
		}
	},

	btnBook__outline:{
		color: 'green',
		border: '2px solid green',
	},
}));