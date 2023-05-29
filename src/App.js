// import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Front from "./components/Front.jsx"
import Witch from "./components/witchHouse"
import About from "./components/About"
import Theme from "./Themeprovider.jsx"
import SpookyHouse from "./components/insideHouse.jsx"

// const LightTheme = React.lazy(() => import('./themes/lightTheme'));
const SpookyTheme = React.lazy(() => import('./components/Cottage/witchTheme'));

//STEP 2:
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  return (
    <>
      <React.Suspense fallback={<></>}>
       <SpookyTheme />  
      </React.Suspense>
      {children}
    </>
  )
}


function App() {
  function pageSet(){
    if(slide ==0)
      {
        console.log("witch")
        return(
          <Theme condition={condition} direction={'right'}>
            <Witch change={slideChanger}/>
          </Theme>
          )
      }
      else if(slide==2)
      {
        console.log("about")
        return(
          <Theme condition={condition} direction={'left'}>
            <About slider={slideChanger}/>
          </Theme>
          )
      }
      else if(slide==1){
    
        console.log("front")
      return (
    
        <Theme condition={condition} direction={'up'}>
          <Front slider={slideChanger}/>
        </Theme>
          );
      }
      else if(slide==3){
        console.log("house")
        return(
          <ThemeSelector>
            <SpookyHouse slider={slideChanger} currentSlide={slide}/>
          </ThemeSelector>)
      }
  }
  
  let condition=true
  let [slide,slideChange]=new React.useState(1);
  console.log(slide)
  function slideChanger(val){
    // slideChange(val)
    slideChange(val)
    pageSet()
  }
  return pageSet()

 

  
}

export default App;
