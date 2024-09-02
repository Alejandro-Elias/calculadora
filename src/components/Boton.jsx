import React from 'react'

export const Boton = ({ children, manejarClick, rangeValue }) => {

  const colorBotom = () =>{ 
    if (rangeValue === 2 ) {
      return children === "DEL" || children === "RESET" ? ' bg-theme2-key-bg text-theme2-key-lightBg text-[19px]  md:text-2xl' : children === '=' ? 'bg-theme1-key-toggleBg text-theme2-key-lightBg text-xl md:text-3xl ' : 'bg-theme2-key-lightBg text-theme1-text-darkBlue text-[32px]'
    } else if (rangeValue === 3) {
      return children === "DEL" || children === "RESET" ? 'bg-theme3-key-bg text-theme3-text-white text-[19px] md:text-2xl ' : children === '=' ? 'bg-theme3-key-toggleBg  text-theme3-text-darkBlue text-xl md:text-3xl ' : 'bg-theme3-key-bg text-theme3-text-yellow text-[32px]'
    } else {
      return children === "DEL" || children === "RESET" ? 'bg-theme1-key-bg text-theme1-key-lightBg text-[19px] md:text-2xl ' : children === '=' ? 'bg-theme1-key-toggleBg text-theme1-key-lightBg text-xl md:text-3xl ' : 'bg-theme1-key-lightBg text-theme1-text-darkBlue text-[32px]'
    }}

    const borderButton = () => {
      if (rangeValue === 2) {
        return children === "DEL" || children === "RESET" ? 'bg-theme2-key-shadow ' : children === '=' ? 'bg-theme2-key-toggleShadow' : 'bg-theme2-key-lightShadow'        
      } else if (rangeValue === 3) {
        return children === "DEL" || children === "RESET" ? 'bg-theme3-key-shadow' : children === '=' ? 'bg-theme3-key-toggleShadow' : 'bg-theme3-key-darkShadow'
      } else {
        return children === "DEL" || children === "RESET" ? 'bg-theme1-key-shadow' : children === '=' ? 'bg-theme1-key-toggleShadow' : 'bg-theme1-key-lightShadow'
      }
    }

	return (
		<button className='flex-col flex-1'>
			<div className={`flex h-[60px] justify-center items-center rounded-lg font-bold ${colorBotom()} `}  onClick={() => manejarClick(children)} > 
				{children}
			</div>
			<div className={`h-1 w-[98%] rounded-b-xl -mt-[4px] mx-auto ${borderButton()}`} >				
			</div>
		</button>
	)
}
