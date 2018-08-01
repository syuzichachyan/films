import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom'
import {Button, Card, Col, Container, Row} from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style.css'

class Login extends Component {


    render() {
        const {email, apiKey, login, handleSubmit, isAuthenticated} = this.props;
        const {from} = this.props.location.state || {from: {pathname: '/main'}};

        if (isAuthenticated) {
            return <Redirect to={from}/>;
        }

        else
            return (
                <Container>
                    <section className="form-dark">
                        <Row>
                            <Col>
                                <Card className="card-image" style={{
                                    backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                                    width: '26rem'
                                }}>
                                    <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                                        <div className="text-center">
                                            <h3 className="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong>
                                                <a
                                                    className="green-text font-weight-bold"><strong> UP</strong></a>
                                            </h3>
                                        </div>
                                        <form onSubmit={handleSubmit(login)}>
                                            <div className="md-form">
                                                <Field name="email" component="input" type="email"
                                                       className="form-control" value="" id="email"/>
                                                <label className={`${email ? "active" : ""}`} htmlFor="email">Your
                                                    email</label>
                                            </div>
                                            <div className="md-form">
                                                <Field name="apiKey" component="input" type="password"
                                                       className="form-control" value="" id="apiKey"/>
                                                <label className={`${apiKey ? "active" : ""}`} htmlFor="apiKey">Your Api
                                                    Key</label>
                                            </div>


                                            <Row className="d-flex align-items-center mb-4">
                                                <div className="text-center mb-3 col-md-12">
                                                    <Button color="success" rounded type="submit"
                                                            className="btn-block z-depth-1">Sign in</Button>
                                                </div>
                                            </Row>
                                        </form>
                                        <Col md="12">
                                            <p className="font-small white-text d-flex justify-content-end">Have an
                                                account? <a href="/" className="green-text ml-1 font-weight-bold"> Log
                                                    in</a></p>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </section>
                </Container>

            )
    }
}

export default reduxForm({
    form: 'login'
})(Login)