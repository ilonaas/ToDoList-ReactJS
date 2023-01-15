
const RemoveAllButton = ({ text, onClick }) => {
  return (
    <button 
    className="delete-all-btn" 
    onClick={onClick}>{text}
    </button>
  )
}

export default RemoveAllButton
