import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

	wrapper:{
		// width: '200px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '5px 5px 10px -8px grey',
		transition: '150ms ease-in',
		backgroundColor: theme.white,
		'&:hover':{
			transform:'scale(1.01)',
			boxShadow: '5px 5px 10px -5px grey',
			transition: '150ms ease-out',
		},

		[theme.fn.smallerThan('md')]:{
			flexDirection: 'row',
			alignItems: 'center',
			gap: '20px',
		}
	},

	wrapperSelected:{
		// width: '200px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: '5px 5px 10px -8px grey',
		transition: '150ms ease-in',
		'&:hover':{
			transform:'scale(1.01)',
			boxShadow: '5px 5px 10px -5px grey',
			transition: '150ms ease-out',
		},
		backgroundColor: theme.colors.green[8],

		[theme.fn.smallerThan('md')]:{
			flexDirection: 'row',
			alignItems: 'center',
			gap: '20px',
		}
	},

	time:{
		fontFamily: 'Arial',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',
		gap: '2px',
	},

	time_numbers:{
		fontWeight: '100',
		fontSize: '30px',
		color: theme.colors.gray[7],
	},

	time_AmPm:{
		fontWeight: '100',
		fontSize: '20px',
		color: theme.colors.red[9],
	},

	time_duration:{},

	badge_root:{
		backgroundColor: theme.colors.gray[3],
		display: 'flex',
		flexDirection: 'row',
		justifyContent:'flex-start',
		padding: '0 10px 0 0',
		border: 'unset',
		color: theme.colors.green[9],
		height: 34,
	},

	badge_LeftSection:{
		backgroundColor: theme.white,
		color: theme.colors.green[9],
		border: '2px solid green',
		width: 30,
		height: 30,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%',
		fontSize: '20px',
		// margin: '2px 2px 2px 2px',
	},

	seatsContainer:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent:'flex-end',
		width: '100%',
	},

	fullybooked:{
		opacity: 0.95,
		position: 'absolute',
		transform: 'rotate(20deg)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		top: 40,
		left: -50,
		width: '150%',
		height: 40,
		backgroundColor: theme.colors.red[6],
		color: theme.white,
		fontWeight: 800,

		boxShadow: '0px 0px 20px 100px rgba(0,0,0,0.2)',

		[theme.fn.smallerThan('md')]:{
			top: 25,
			left: -85,
			transform: 'rotate(15deg)',
		}
	},

}));