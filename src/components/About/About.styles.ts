import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	wrapper:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		minHeight: '800px',
    padding: '10px 0px 20px 0px',
	},

	section_title:{
		color: theme.colors.blue,
		textAlign: 'center',
		padding: '20px 0px',
    [theme.fn.smallerThan('sm')]:{
      fontSize: '30px',
    },
	},

	section_title_highlight:{
		display: 'inline-block',
    background: 'linear-gradient(45deg, hsla(220, 100%, 60%, 1), hsla(180, 100%, 40%, 1))',
		padding: '5px 15px',
		margin: '0px 13px',
		color: 'white',
		boxShadow: '10px 10px 20px -10px lightblue',
		borderRadius: '5px',
	},
	
	about:{
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent:'center',
		padding: '50px 0 0 0',
	},

	profile_photo:{
		width: '200px',
		backgroundColor: 'red',
    display: 'none',
	},
	
	profile:{
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    textAlign: 'center',
    alignItems: 'center',
	},

	profile_content:{
    color: theme.colors.grey,
    display: 'flex',
    flexDirection: 'column',
    gap:' 10px',
    padding: '0px 50px',
    width: '800px',

    [theme.fn.smallerThan('sm')]:{
      padding: '0px 20px',
      width: 'auto',
    },
  },

	profile_text_title:{
		//fontSize: '20px',
    color: theme.colors.blue,
    padding: '20px 20px',
    textTransform: 'uppercase',

    // [theme.fn.smallerThan('sm')]:{
    //   padding: '0px 0px',
    // },
	},

  profile_text:{
    lineHeight:'2',
		fontSize: '18px',

    [theme.fn.smallerThan('sm')]:{
      textAlign: 'justify',
    },
  },

  profile_text_highlight_blue_sm:{
		display: 'inline-block',
    //background: 'linear-gradient(45deg, hsla(220, 100%, 60%, 1), hsla(180, 100%, 40%, 1))',
    color: 'hsla(200, 80%, 50%, 1)',
		borderRadius: '5px',
    position: 'relative',
    zIndex: '100',
    margin: '0px 15px',

    '&:before':{
      content: "''",
      position: 'absolute',
      top: '10%',
      left: '-8px',
      width: '100%',
      height: '70%',
      //backgroundColor: 'hsla(200, 80%, 50%, 1)',
      zIndex: '-100',
      color: 'white',
      borderRadius: '4px',
      border: '2px solid hsla(200, 80%, 50%, 1)',
      padding: '0px 6px',
    },
  },

  text_highlight_shadow:{},

  logos_title:{
    margin: '20px 0px 0px 0px',
    fontSize: '25px',
    fontWeight: '600',
    lineHeight: '1',
    color:'hsla(200, 10%, 70%, 1)',

    [theme.fn.smallerThan('sm')]:{
      textAlign: 'center',
    }
  },

  logos:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth:'800px',
    gap: '50px',
    margin: '50px 0px 100px 0px',
    flexWrap: 'wrap',
    [theme.fn.smallerThan('sm')]:{
      gap:'30px',
    },
	},

  logos_img:{
    filter: 'grayscale(100%)',
    opacity: '0.5',
    maxHeight: '50px',
    [theme.fn.smallerThan('sm')]:{
      maxWidth: '40vw',
    },
  },

}));