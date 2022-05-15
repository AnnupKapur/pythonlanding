import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		height: '800px',
	},

	profile__photo__container:{
		width: '50px',
	}
}));