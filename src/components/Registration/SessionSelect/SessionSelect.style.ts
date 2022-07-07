import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme)=>({

	wrapper:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		maxWidth: '800px',
		position: 'relative',
		flexGrow: 1,
		height: 'calc(100vh - 300px)',
		overflow: 'scroll',
	},

	title:{
		width:'100%', 
		display:'flex', 
		justifyContent:'center'
	},

	accordian_item:{
		width: 800,
		backgroundColor: 'transparent',

		[theme.fn.smallerThan('md')]:{
			width: '100vw',
		}
	},

	accordian_itemTitle:{
		backgroundColor: 'transparent',
	},

	accordian_control:{
		backgroundColor:'transparent',
		'&:hover': {
			backgroundColor: 'transparent',
			opacity: 1,
		},
	},

	accordian_label:{
		color: theme.colors.green[9],
		fontSize: '30px'
	},

	accordian_contentInner:{
		display: 'flex',
		flexDirection: 'row',
		gap: '20px',
		flexWrap: 'wrap',
	},

	dayGroup:{
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},

	dayTitle:{
		width: '100%',
		backgroundColor: 'red',
		fontSize: '2em',
		textAlign: 'left',
	},

}))