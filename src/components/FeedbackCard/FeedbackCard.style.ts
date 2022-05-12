import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

	wrapper:{
		display: 'flex',
		flexDirection:'column',
		width: '250px',
		borderTop: '2px',
		borderRight: '2px',
		borderBottom: '5px',
		borderLeft: '5px',
	},


	// TODO: CONSIDER HSLA FOR THESE COLORS
	wrapper_red:{
		borderColor:'red',
	},

	wrapper_blue:{
		borderColor:'blue',
	},

	wrapper_green:{
		borderColor:'green',
	},

	wrapper_purple:{
		borderColor:'purple',
	},

	wrapper_grey:{
		borderColor:'grey',
	},
	
	top:{},

	avatar:{},

	text_name:{},

	content:{},

	text_testamonial:{},

	bottom:{},
}));