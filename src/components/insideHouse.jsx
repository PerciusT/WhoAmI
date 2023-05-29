import React from "react"
// import "../css/spookyHouse.css";

//STEP 1:
//create components using React.lazy


function SpookyHouse(props){
  // React.lazy(()=> import("../css/spookyHouse.css"))
	return(
		<div className="container">
    <h1 className="backButton" onClick={()=>{
      window.location.reload(true);
    }}>Go Back?</h1>
  <div className="shelf-one">
    <div className="shelf shadow">
      <div className="shelf-hooks"></div>
      <div className="base"></div>
      <div className="crystal-ball">
        <div className="stand"></div>
        <div className="ball"></div>
      </div>
      <div className="bottle bottle-1">
        <div className="bowl"></div>
        <div className="bottle-neck"></div>
        <div className="bottle-top"></div>
      </div>
      <div className="drippings">
        <div className="drip"></div>
      </div>
      <div className="bottle bottle-3">
        <div className="bowl"></div>
        <div className="bottle-neck"></div>
        <div className="bottle-top"></div>
      </div>
    </div>
    <div className="shelf">
      <div className="shelf-hooks"></div>
      <div className="base"></div>
      <div className="crystal-ball">
        <div className="stand"></div>
        <div className="ball">
          <div className="ball-highlight"></div>
        </div>
      </div>
      <div className="bottle bottle-1">
        <div className="bowl">
          <div className="bowl-in">
            <div className="liquid">
              <div className="bottle-bubble"></div>
              <div className="bottle-bubble"></div>
              <div className="bottle-bubble"></div>
              <div className="bottle-bubble"></div>
              <div className="bottle-bubble"></div>
            </div>
            <div className="bottle-reflection"></div>
          </div>
        </div>
        <div className="bottle-neck"></div>
        <div className="bottle-top"></div>
      </div>
      <div className="drippings">
        <div className="drip"></div>
      </div>
      <div className="bottle bottle-3">
        <div className="bowl">
          <div className="bowl-in">
            <div className="liquid"></div>
          </div>
        </div>
        <div className="bottle-neck"></div>
        <div className="bottle-top"></div>
      </div>
    </div>
  </div>
  <div className="shelf-two">
    <div className="shelf shadow">
      <div className="shelf-hooks"></div>
      <div className="base"></div>
      <div className="skull">
        <div className="head"></div>
        <div className="teeth"></div>
      </div>

      <div className="candles" title="Need it urgently?">
      <div>
        <span className="toolTip">Need it urgently? Click here</span>
      </div>
        <div className="candle">
          <div className="candle-wax"></div>
          <div className="flame">
            <div className="flame-in"></div>
          </div>
        </div>
        <div className="candle">

          <div className="candle-wax"></div>
          <div className="flame">

            <div className="flame-in">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shelf">
      <div className="shelf-hooks"></div>
      <div className="base"></div>
      <div className="skull">
        <div className="head">
          <div className="skull-stain"></div>
          <div className="eye"></div>
          <div className="eye"></div>
          <div className="nose"></div>
        </div>
        <div className="teeth">
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
        </div>
      </div>
      <div className="candles">
        <div className="candle">
          <div className="candle-wax">
            <div className="wax-reflection"></div>
            <div className="wax-reflection-top"></div>
          </div>
          <div className="candle-reflection"></div>
          <div className="flame">
            <div className="flame-in"></div>
          </div>
        </div>
        <div className="candle">
          <div className="candle-wax">
            <div className="wax-reflection"></div>
            <div className="wax-reflection-top"></div>
          </div>
          <div className="candle-reflection"></div>
          <div className="flame">
            <div className="flame-in"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shelf-three">
    <div className="shelf shadow">
      <div className="shelf-hooks"></div>
      <div className="base"></div>
      <div className="spider-group">
        <div className="thread"></div>
        <div className="spider">
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
        </div>
      </div>
      <div className="books">
        <div className="book"></div>
        <div className="book"></div>
        <div className="book"></div>
        <div className="book-up"></div>
      </div>
      <div className="candy-bowl">
        <div className="candy-bowl-top"></div>
      </div>
    </div>
    <div className="shelf">
      <div className="shelf-hooks"></div>
      <div className="base"></div>
      <div className="spider-group">
        <div className="thread"></div>
        <div className="spider">
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
          <div className="spider-leg"></div>
        </div>
      </div>
      <div className="books">
        <div className="book">
          <div className="details"></div>
        </div>
        <div className="book">
          <div className="details"></div>
        </div>
        <div className="book">
          <div className="details"></div>
        </div>
        <div className="book-up">
          <div className="details"></div>
        </div>
      </div>
      <div className="candy-bowl">
        <div className="candy-bowl-top"></div>
        <div className="candy-bowl-in">
          <div className="candy-1"></div>
          <div className="candy-1"></div>
          <div className="candy-1"></div>
          <div className="candy-1"></div>
          <div className="candy-2">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-2">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-2">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-2">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-3"></div>
          <div className="candy-3"></div>
          <div className="candy-3"></div>
          <div className="candy-3"></div>
          <div className="candy-4">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-4">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-4">
            <div className="candy-reflection"></div>
          </div>
          <div className="candy-4">
            <div className="candy-reflection"></div>
          </div>
        </div>
        <div className="candy-bowl-reflection"></div>
      </div>
    </div>
  </div>
  <div className="witch shadow">
    <div className="middle"></div>
    <div className="right-arm">
      <div className="bottle bottle-1">
        <div className="bowl">
          <div className="bowl-in"></div>
        </div>
        <div className="bottle-neck"></div>
        <div className="bottle-top">
          <div className="pink-liquid"></div>
        </div>
      </div>
      <div className="right-hand"></div>
    </div>
    <div className="head-group">
      <div className="hair-back">
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
      </div>
      <div className="witch-head"></div>
      <div className="hat">
        <div className="hat-top">
          <div className="hat-top-in"></div>
        </div>
        <div className="hat-band"></div>
        <div className="hat-bottom"></div>
      </div>
    </div>
  </div>
  <div className="witch">
    <div className="bottom"></div>
    <div className="middle"></div>
    <div className="right-arm">
      <div className="bottle bottle-1">
        <div className="bowl">
          <div className="bowl-in">
            <div className="liquid"></div>
            <div className="bottle-reflection"></div>
          </div>
        </div>
        <div className="bottle-neck"></div>
        <div className="bottle-top">
          <div className="pink-liquid"></div>
        </div>
      </div>
      <div className="right-hand"></div>
    </div>
    <div className="head-group">
      <div className="neck"></div>
      <div className="hair-back">
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="hair"></div>
        <div className="witch-ears">
          <div className="witch-ear"></div>
          <div className="witch-ear"></div>
        </div>
      </div>
      <div className="witch-head">
        <div className="cheeks"></div>
        <div className="eyes"></div>
        <div className="eyes"></div>
        <div className="mouth"></div>
        <div className="mouth-hidden"></div>
        <div className="hair-front"></div>
      </div>
      <div className="hat">
        <div className="hat-top">
          <div className="hat-top-in"></div>
        </div>
        <div className="hat-band"></div>
        <div className="hat-stars">
          <div className="hat-star"></div>
          <div className="hat-star"></div>
          <div className="hat-star"></div>
        </div>
        <div className="hat-band-top"></div>
        <div className="hat-bottom"></div>
      </div>
    </div>
  </div>
  <div className="light"></div>
  <div className="cauldron shadow">
    <div className="left-arm"></div>
    <div className="stick-group">
      <div className="stick"></div>
      <div className="hand"></div>
    </div>
    <div className="bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
    <div className="cauldron-top"></div>
  </div>
  <div className="cauldron">
    <div className="left-arm"></div>
    <div className="stick-group">
      <div className="stick"></div>
      <div className="hand"></div>
    </div>
    <div className="handle"></div>
    <div className="bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
    <div className="cauldron-top"></div>
  </div>
  <div className="window-group shadow">
    <div className="window"></div>
  </div>
  <div className="window-group">
    <div className="window">
      <div className="window-reflections"></div>
      <div className="window-reflections"></div>
      <div className="window-reflections">     </div>
      <div className="window-in">
        <div className="ghost-group">
          <div className="ghost">
            <div className="bottom">
              <div className="bottom-part"></div>
              <div className="bottom-part"></div>
              <div className="bottom-part"></div>
            </div>
            <div className="eyes"></div>
          </div>
        </div>
        <div className="moon">
          <div className="craters"></div>
        </div>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
    <div className="cat highlight">
      <div className="cat-head">
        <div className="ear">
          <div className="ear-in"></div>
        </div>
        <div className="ear">
          <div className="ear-in"></div>
        </div>
      </div>
      <div className="cat-body"></div>
      <div className="cat-paw"></div>
      <div className="cat-neck">
        <div className="neck">
          <div className="neck">
            <div className="neck">
              <div className="neck">
                <div className="neck">
                  <div className="neck">
                    <div className="neck">
                      <div className="neck">
                        <div className="neck">           </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cat">
      <div className="cat-head">
        <div className="ear">
          <div className="ear-in"></div>
        </div>
        <div className="ear">
          <div className="ear-in"></div>
        </div>
      </div>
      <div className="cat-body"></div>
      <div className="cat-paw"></div>
      <div className="cat-neck">
        <div className="neck">
          <div className="neck">
            <div className="neck">
              <div className="neck">
                <div className="neck">
                  <div className="neck">
                    <div className="neck">
                      <div className="neck">
                        <div className="neck"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cat-tail highlight">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail last"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cat-tail shadow">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail last"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cat-tail">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail last"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="broom shadow">
    <div className="broom-stick">
      <div className="bat">
        <div className="bat-legs"></div>
        <div className="bat-body"></div>
        <div className="bat-wing"></div>
        <div className="bat-wing"></div>
        <div className="bat-ear"></div>
        <div className="bat-ear"></div>
      </div>
    </div>
    <div className="broom-hook"></div>
    <div className="broom-hook"></div>
    <div className="broom-hair">
      <div className="broom-hair-top"></div>
      <div className="broom-hair-bottom"></div>
      <div className="broom-hair-band"></div>
    </div>
  </div>
  <div className="broom">
    <div className="broom-stick">
      <div className="broom-stick-shadow"></div>
      <div className="bat">
        <div className="bat-legs"></div>
        <div className="bat-body"></div>
        <div className="bat-wing"></div>
        <div className="bat-wing"></div>
        <div className="bat-ear"></div>
        <div className="bat-ear"></div>
      </div>
    </div>
    <div className="broom-hook"></div>
    <div className="broom-hook"></div>
    <div className="broom-hair">
      <div className="broom-hair-top"></div>
      <div className="broom-hair-bottom"></div>
      <div className="broom-lines"></div>
      <div className="broom-hair-bottom-reflection"></div>
      <div className="broom-hair-band"></div>
      <div className="broom-details"></div>
      <div className="broom-details"></div>
    </div>
  </div>
  <div className="pumpkins shadow">
    <div className="pumpkin">
      <div className="top"></div>
    </div>
    <div className="pumpkin">
      <div className="top"></div>
    </div>
  </div>
  <div className="pumpkins">
    <div className="pumpkin">
      <div className="top"></div>
    </div>
    <div className="pumpkin">
      <div className="top"></div>
    </div>
  </div>
</div>)
}

export default SpookyHouse