import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.colors.green,
    gap: '20px',
	},
	text_title:{
		textAlign: 'center',
    fontSize: '30px',
    fontWeight: '400',
  },
  text_content:{
    color: theme.colors.gray,
    textAlign: 'center',
    fontSize: '20px',
    maxWidth: '800px',
  },
  buttons_icons:{
    padding:'20px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    gap: '15px',
  },
  facebook:{},
  twitter:{
    backgroundColor: theme.colors.blue[3],
  },
  instagram:{},
  phone:{},
  email:{},
  home:{},
}));