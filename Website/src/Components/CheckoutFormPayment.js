/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import CreditCardInput from 'react-credit-card-input'

/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
class CheckoutFormPayment extends React.Component {

    constructor(props) 
    {
      super(props);
      sessionStorage.clear();
      this.state = {paymentType : 'credit', };

      /* Bind the function to "this" context */
      this.handlePaymentSelection = this.handlePaymentSelection.bind(this);
      this.displayContent = this.displayContent.bind(this);
    }


    handlePaymentSelection (e) {
        e.preventDefault();

        this.setState({
            paymentType: e.target.value,
        });
    }

    displayContent () {
        
        if (this.state.paymentType === 'credit')
        {
            return this.getCreditContent();
        }
        else if (this.state.paymentType === 'paypal')
        {
            return this.getPaypalContent();
        }
        else 
        {
            return this.getAmazonContent();
        }
    }

    getCreditContent () {
        let cardNumber = null;
        let expiry = '';
        let cvc = null;

        return (
            <div>
                <Form className="mt-4">
                    <FormGroup>
                        <Form.Control type="text" name="ch_name" placeholder="Cardholder Name" id="chName" />
                    </FormGroup>
                    <FormGroup>
                        <CreditCardInput
                            cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                            cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                            cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                            fieldClassName="input"
                        />
                    </FormGroup>
                </Form>
            </div>
        );
    }

    getPaypalContent () {
        return <div></div>
    }

    getAmazonContent () {
        return <div></div>
    }


    render () {
        return (
            <div className="container-fluid payment-btn-group">
                <Button outline className={this.state.paymentType ==='credit' ? 'active' : null} color="secondary" value="credit" onClick={this.handlePaymentSelection}>Credit Card</Button>
                <Button outline className={this.state.paymentType ==='paypal' ? 'active' : null} color="secondary" value="paypal" onClick={this.handlePaymentSelection}>PayPal</Button>
                <Button outline className={this.state.paymentType ==='amazon' ? 'active' : null} color="secondary" value="amazon" onClick={this.handlePaymentSelection}>Amazon</Button>
                { this.displayContent() }
            </div>
		);
    }


}

export default CheckoutFormPayment;