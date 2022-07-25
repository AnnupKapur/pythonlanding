import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme)=>({

	wrapper:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'relative',
		flexGrow: 1,
		height: 'calc(100vh-300px)',
		width: '100%',
		// backgroundColor: 'red',
	},

	inputGroup: {
		display: 'flex',
		flexDirection: 'row',
		gap: '20px',
		// backgroundColor: 'green',
		width: '800px',


		[theme.fn.smallerThan('sm')]:{
			width: 'calc(100vw - 40px)', 
			padding: '0px 20px',
			flexDirection: 'column',
		},
	},

	salutation_root:{
		flexGrow: 1,
	},

	names_root:{
		flexGrow: 2,
	},

	general_input: {
		border: '2px solid green',
	},

}))