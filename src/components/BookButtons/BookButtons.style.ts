import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'center',
		width: '100%',
		gap:'10px',
		marginTop: '50px',
		zIndex: 50,

		[theme.fn.smallerThan('sm')]:{
			flexDirection:'column',
			alignItems:'center',
		}
	},

	btnBook:{
		[theme.fn.smallerThan('sm')]:{
			minWidth: '50%',
		}
	}
}));