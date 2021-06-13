/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import CreditCardInput from 'react-credit-card-input'

/* Images */
import PaypalButton from '../Images/PaypalButton.jpg'
import BitcoinButton from '../Images/BitcoinButton.png'
import AmazonButton from '../Images/AmazonButton.png'

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
        
        switch(this.state.paymentType)
        {
            case 'credit':
                return this.getCreditContent();

            case 'paypal':
                return this.getPaypalContent();

            case 'amazon':
                return this.getAmazonContent();

            case 'bitcoin':
                return this.getBitCoinContent();

            default:
                this.setState({
                    paymentType: 'credit',
                });
                return this.displayContent();
        }
    }

    getCreditContent () {
        let cardNumber = '';
        let expiry = '';
        let cvc = '';

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
        return  (
        <div>
            <img src={PaypalButton} alt="" width='350rem'></img>
        </div>);
    }

    getAmazonContent () {
        return  (
        <div>
            <img src={AmazonButton} alt="" width='350rem'></img>
        </div>);
    }

    getBitCoinContent () {
        return  (
            <div>
                <img src={BitcoinButton} alt="" width='350rem'></img>
            </div>);
    }


    render () {
        return (
            <div className="container-fluid payment-btn-group">
                <Button outline='true' className={this.state.paymentType ==='credit' ? 'active' : null} color="secondary" value="credit" onClick={this.handlePaymentSelection}>Credit Card</Button>
                <Button outline='true' className={this.state.paymentType ==='paypal' ? 'active' : null} color="secondary" value="paypal" onClick={this.handlePaymentSelection}>PayPal</Button>
                <Button outline='true' className={this.state.paymentType ==='amazon' ? 'active' : null} color="secondary" value="amazon" onClick={this.handlePaymentSelection}>Amazon</Button>
                <Button outline='true' className={this.state.paymentType ==='bitcoin' ? 'active' : null} color="secondary" value="bitcoin" onClick={this.handlePaymentSelection}>Bitcoin</Button>
                { this.displayContent() }
            </div>
		);
    }


}

export default CheckoutFormPayment;