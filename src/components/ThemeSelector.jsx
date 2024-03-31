import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
export default function ThemeSelector() {

const {changeColor} = useTheme()
const themeColors = [ '#576490', '#7796CB', '#A3BCF9']

  return (
    <div className='theme-selector'>
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
