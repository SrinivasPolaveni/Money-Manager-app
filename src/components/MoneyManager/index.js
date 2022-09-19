import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const arrayList = []

class MoneyManager extends Component {
  state = {
    AmountList: arrayList,
    optionId: transactionTypeOptions[0].optionId,
    Balance: 0,
    Income: 0,
    Expenses: 0,
    titleInput: '',
    amountInput: '',
    text1: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const newContact = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }

    this.setState(prevState => ({
      AmountList: [...prevState.AmountList, newContact],
      titleInput: '',
      amountInput: '',
    }))

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        Balance: prevState.Balance + parseInt(amountInput),
        Income: prevState.Income + parseInt(amountInput),
      }))
    } else {
      this.setState(prevState => ({
        Balance: prevState.Balance - parseInt(amountInput),
        Expenses: prevState.Expenses + parseInt(amountInput),
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  deletedArrayItem = id => {
    const {AmountList} = this.state
    const newArrayListItems = AmountList.filter(eachItem => eachItem.id !== id)
    this.setState({AmountList: newArrayListItems})

    const changedListItems = AmountList.map(eachItem => {
      if (eachItem.id === id) {
        if (eachItem.optionId === 'INCOME') {
          this.setState(prevState => ({
            Balance: prevState.Balance - parseInt(eachItem.amountInput),
            Income: prevState.Income - parseInt(eachItem.amountInput),
          }))
        } else {
          this.setState(prevState => ({
            Balance: prevState.Balance + parseInt(eachItem.amountInput),
            Expenses: prevState.Expenses - parseInt(eachItem.amountInput),
          }))
        }
      }
      return eachItem
    })
  }

  render() {
    const {
      AmountList,
      optionId,
      Balance,
      Income,
      Expenses,
      titleInput,
      amountInput,
      text1,
    } = this.state
    return (
      <div className="bg-container">
        <div className="card1">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your <span className="word">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails Balance={Balance} Income={Income} Expenses={Expenses} />
        </div>
        <div className="bottom-container">
          <div className="form-container1">
            <form className="form-container" onSubmit={this.onAddContact}>
              <h1 className="Transaction-paragraph">Add Transaction</h1>
              <div className="input-element">
                <label htmlFor="TITLE" className="label-element">
                  TITLE
                </label>
                <input
                  type="text"
                  id="TITLE"
                  value={titleInput}
                  placeholder="TITLE"
                  className="input"
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="input-element">
                <label htmlFor="AMOUNT" className="label-element">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="AMOUNT"
                  placeholder="AMOUNT"
                  value={amountInput}
                  className="input"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="selectItemSection">
                <label htmlFor="selectItem" className="label-element">
                  TYPE
                </label>
                <select
                  id="selectItem"
                  className="selectItem1"
                  value={optionId}
                  onChange={this.onChangeOptionId}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option key={eachItem.optionId} value={eachItem.optionId}>
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-Container1">
            <h1 className="Transaction-paragraph">History</h1>
            <div className="history-Container">
              <p className="history-paragraph">Title</p>
              <p className="history-paragraph">Amount</p>
              <p className="history-paragraph">Type</p>
              <p className="history-paragraph">{text1}</p>
            </div>
            <div>
              <div>
                {AmountList.map(eachItem => (
                  <TransactionItem
                    ItemDetails={eachItem}
                    key={eachItem.id}
                    deletedArrayItem={this.deletedArrayItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
