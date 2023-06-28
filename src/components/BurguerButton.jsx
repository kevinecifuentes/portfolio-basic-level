import './styles/burguerButton.css'

const BurguerButton = ({ burguerMenu, handleClickBurguerMenu }) => {
  return (
    <div
      onClick={handleClickBurguerMenu}
      className={`icon nav-icon-5 ${burguerMenu ? 'open' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default BurguerButton
