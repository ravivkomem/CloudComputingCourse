/* ########################################### */
/* #         I M P O R T S                   # */
/* ########################################### */
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


/* ########################################### */
/* #  C L A S S   D E F I N I T I O N        # */
/* ########################################### */
const ContactInfo = (props) => {

    return (
        <Container>
            <Row>
                <h4>Contact Information</h4>
            </Row>
            <Row>
                <Col>
                    <h5>Contact Us</h5>
                    <p>
                        <i className='fa fa-map-marker'></i> Tel Aviv
                    </p>
                    <p>
                        <i className='fa fa-phone'></i> 054-6848161
                    </p>
                    <p>
                        <i className='fa fa-envelope-o'></i> ravivkomem@gmail.com
                    </p>
                </Col>
                <Col>
                    <h5>Social</h5>
                    <p>
                        <a href={'/'}>
                            <i className='fa fa-facebook'></i> facebook.com
                        </a>
                    </p>
                    <p>
                        <a href={'/'}>
                            <i className='fa fa-twitter'></i> twitter.com
                        </a>
                    </p>
                    <p>
                        <a href={'/'}>
                            <i className='fa fa-youtube'></i> youtube.com
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default ContactInfo;
