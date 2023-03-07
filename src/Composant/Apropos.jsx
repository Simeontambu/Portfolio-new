const Apropos = (props) => {
  const donnes = props.Donne
  return (
    <div id="about">
      <h2>Qui suis-je?</h2>
      <h3>{donnes.apropos}</h3>
    </div>
  )
}
export default Apropos
