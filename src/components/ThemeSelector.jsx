import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode.svg'
export default function ThemeSelector() {

const {changeColor, changeMode, mode} = useTheme()
const themeColors = [ '#576490', '#7796CB', '#A3BCF9']

const toggleMode = () => {
    mode === 'light' ? changeMode('dark') : changeMode('light')
}
  return (
    <div className='theme-selector'>
        <div className="mode-toggle" onClick={toggleMode}>
            <img src={modeIcon} alt="Mode Switch" style = {{filter : mode ==='dark' ? 'invert(100%)' : 'invert(20%)' }}/>
        </div>
      <div className='theme-buttons'> 
        {themeColors.map(color=>(
            <div 
            key={color}
            onClick={() => changeColor(color) }
            style = {{background:color}}
            />
        ))}
      </div>
    </div>
  )
}
