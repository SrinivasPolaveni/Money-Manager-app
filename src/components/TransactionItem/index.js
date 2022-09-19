// Write your code here
import './index.css'

const TransactionItem = props => {
  const {ItemDetails, deletedArrayItem} = props
  const {id, titleInput, amountInput, optionId} = ItemDetails

  const onChangeList = () => {
    deletedArrayItem(id)
  }

  return (
    <li className="history-Container2">
      <p className="history-paragraph2">{titleInput}</p>
      <p className="history-paragraph2">RS {amountInput}</p>
      <p className="history-paragraph2">{optionId}</p>
      <button type="button" className="button1" onClick={onChangeList}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image3"
        />
      </button>
    </li>
  )
}
export default TransactionItem
