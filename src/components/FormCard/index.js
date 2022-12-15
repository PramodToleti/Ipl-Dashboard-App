import './index.css'

const FormCard = props => {
  const {formDetails} = props
  const {result} = formDetails
  const formStyles = result === 'Won' ? 'win-style' : 'lose-style'
  return (
    <li className="form-details-container">
      <p className={`form ${formStyles}`}>{result.slice(0, 1)}</p>
    </li>
  )
}

export default FormCard
