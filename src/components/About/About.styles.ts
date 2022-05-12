import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display: 'block',
		marginTop: '150px',
		padding:'0',
		width: '700px',
	},

	infoTitle:{
		fontSize: '30px',
	},

	subtitle:{
		color:theme.colors.dark,
		opacity: '0.3',
		textAlign: 'center',
	}
}));