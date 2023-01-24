import RemoveAllButton from "./RemoveAllButton"

  const Footer = ({onDeleteAll}) => {
    const onClick = () => {
        console.log('Raderade alla')
        onDeleteAll()
    }
  return (
    <footer>
     <RemoveAllButton text="Remove all tasks" onClick={onClick}/>
    </footer>
  )

}

export default Footer
