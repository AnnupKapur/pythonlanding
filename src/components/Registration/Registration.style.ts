import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({

	wrapper:{
		display: 'flex', 
		flexDirection:'column', 
		alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
	},

  step:{
    backgroundColor: 'red',
  }

}));