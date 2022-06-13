import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper: {
    margin: '50px 50px',
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,
    paddingBottom: theme.spacing.xl * 4.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
      margin: '100px 10px',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    minHeight: 460,
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    position: 'relative',
  },

  messageSent:{
    alignItems: 'center',
    color: theme.colors.green,
  },

  messageError:{
    alignItems: 'center',
    color: theme.colors.red,
  },

  messageSent_checkmark:{
  },

  messageSent_confirm:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    flexGrow: '4',
  },

  messageSent_sendNew:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
    gap: '20px',
  },
    
	errorText: {
    paddingTop:10,
	},

	input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
	},

	inputLabel: {
    color: theme.black,
	},

	control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
	},

	contactDetails:{
    display:'flex',
    flexDirection:'column',
    gap:`${theme.spacing.xl}px`,
    color:'lightblue',
    paddingTop:theme.spacing.xl,
	},

	contactOption:{
    display:'flex',
    gap:`${theme.spacing.lg}px`,
	},

	contactIcon:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    minHeight:'100%',
	},

	contactOptionDetails:{
	},

	contactOptionDetailsBody:{
    color:'white'
	},
}));