import React from "react"
import Slide from '@mui/material/Slide';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Theme(props){
	const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});
	return(
		<ThemeProvider theme={theme}>
      <Slide timeout={1000} easing={{enter: " cubic-bezier(0.0, 0.0, 0.2, 1)", exit: theme.transitions.easing.sharp}} in={props.condition} direction={props.direction} mountOnEnter unmountOnExit>
        <div>
          {props.children}
        </div>
      </Slide>
    </ThemeProvider>
    )
}
export default Theme