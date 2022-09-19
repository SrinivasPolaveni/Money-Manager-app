// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, Expenses} = props

  return (
    <div className="income-container">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="paragraph1">Your Balance</p>
          <p className="paragraph2">RS {Balance}</p>
        </div>
      </div>
      <div className="balance-card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="paragraph1">Your Income</p>
          <p className="paragraph2">RS {Income}</p>
        </div>
      </div>
      <div className="balance-card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="paragraph1">Your Expenses</p>
          <p className="paragraph2">RS {Expenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
