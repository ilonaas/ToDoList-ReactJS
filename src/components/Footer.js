import RemoveAllButton from "./RemoveAllButton"

  const Footer = () => {
    const onClick = () => {
        console.log('Raderade alla')
    }
  return (
    <footer>
     <RemoveAllButton text="Remove all tasks" onClick={onClick}/>
    </footer>
  )

}

export default Footer
