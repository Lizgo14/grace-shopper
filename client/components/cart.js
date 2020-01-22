import React from 'react'
import {getCart, deleteItem} from '../store/cart'
import {updateTotal} from '../store/checkoutReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import displayDollars from './helper'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCurrentCart()
  }

  clickDelete(item) {
    this.props.deleteItem(item)
  }

  render() {
    const itemsInCart = this.props.currentCart
    let total = Number(0)
    if (itemsInCart.length === 0) {
      return <div>Please add some tiny homes to your cart!</div>
    }
    console.log('current cart', this.props.currentCart)
    return (
      <div>
        {itemsInCart.map(item => {
          total += Number(item.price * item.count)
          return (
            <ul key={item.id} className="cartItem">
              <img className="preview" src={`/images/${item.imageUrl}`} />
              <li>{item.name}</li>
              <li>Unit Price: {displayDollars(item.price)}</li>
              <li>
                Total: {displayDollars(Number(item.price) * Number(item.count))}
              </li>
              <li>Quantity: {item.count}</li>
              <button
                onClick={() => {
                  this.clickDelete(item)
                }}
              >
                Remove (1) From Cart
              </button>
            </ul>
          )
        })}
        <div>Total: {displayDollars(Number(total))}</div>
        <Link to="/checkout">
          <button onClick={() => this.props.updateTotal(total)}>
            Checkout
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentCart: state.cart
})

const mapDispatchToProps = dispatch => {
  return {
    getCurrentCart: () => {
      dispatch(getCart())
    },
    deleteItem: item => {
      dispatch(deleteItem(item))
    },
    updateTotal: total => {
      dispatch(updateTotal(total))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
