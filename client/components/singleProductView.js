import React from 'react'
import {connect} from 'react-redux'

class SingleProductView extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.selectedProduct.name} </h2>

        <p>
          <img src={this.props.selectedProduct.imageUrl} />
        </p>

        <p>Price: {this.props.selectedProduct.price}</p>

        <p>
          Square Feet:
          {this.props.selectedProduct.length * this.props.selectedProduct.width}
        </p>

        <p>Number of Bedrooms: {this.props.selectedProduct.beds}</p>

        <p>Number of Bathrooms: {this.props.selectedProduct.bathrooms}</p>

        <p>Description: {this.props.selectedProduct.description}</p>

        <button>BUY ME!</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct
})

export default connect(mapStateToProps)(SingleProductView)