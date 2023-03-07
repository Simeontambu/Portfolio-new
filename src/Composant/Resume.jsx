const Resume = (props) => {
  const donnes = props.Donne
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <h2>Formation</h2>
        <ul>
          {donnes.formation.map((item) => {
            return (
              <li key={item.universite}>
                <h3>{item.universite}</h3>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>Expérience</h2>
        <ul>
          {donnes.experience.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.entreprise}</h3>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>Compétence</h2>
        <ul>
          {donnes.competence.map((item) => {
            return <li key={item.nomcompetence}>{item.nomcompetence}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
export default Resume
