import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		width: '100%',
		flexWrap: 'wrap',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '20px',
	}
}));