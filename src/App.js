import React from 'react';
import './App.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Container>
                <Alert variant="info">
                    Hello there! This page is built with <strong>React</strong>, in respect to its original plain <Alert.Link href="https://getbootstrap.com/docs/4.1/examples/grid/" target="_blank">Bootstrap 4.1 version</Alert.Link>.
                </Alert>
                <h1>Bootstrap grid examples</h1>
                <p className="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>

                <h2>Five grid tiers</h2>
                <p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>

                <Row>
                    <Col xs={4}>.col-4</Col>
                    <Col xs={4}>.col-4</Col>
                    <Col xs={4}>.col-4</Col>
                </Row>

                <Row>
                    <Col sm={4}>.col-sm-4</Col>
                    <Col sm={4}>.col-sm-4</Col>
                    <Col sm={4}>.col-sm-4</Col>
                </Row>

                <Row>
                    <Col md={4}>.col-md-4</Col>
                    <Col md={4}>.col-md-4</Col>
                    <Col md={4}>.col-md-4</Col>
                </Row>

                <Row>
                    <Col lg={4}>.col-lg-4</Col>
                    <Col lg={4}>.col-lg-4</Col>
                    <Col lg={4}>.col-lg-4</Col>
                </Row>

                <Row>
                    <Col xl={4}>.col-xl-4</Col>
                    <Col xl={4}>.col-xl-4</Col>
                    <Col xl={4}>.col-xl-4</Col>
                </Row>

                <h2>Three equal columns</h2>
                <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>
                <Row>
                    <Col md={4}>.col-md-4</Col>
                    <Col md={4}>.col-md-4</Col>
                    <Col md={4}>.col-md-4</Col>
                </Row>

                <h2>Three unequal columns</h2>
                <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>
                <Row>
                    <Col md={3}>.col-md-3</Col>
                    <Col md={6}>.col-md-6</Col>
                    <Col md={3}>.col-md-3</Col>
                </Row>

                <h2>Two columns</h2>
                <p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>
                <Row>
                    <Col md={8}>.col-md-8</Col>
                    <Col md={4}>.col-md-4</Col>
                </Row>

                <h2>Full width, single column</h2>
                <p className="text-warning">No grid classes are necessary for full-width elements.</p>

                <hr></hr>

                <h2>Two columns with two nested columns</h2>
                <p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>
                <p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>
                <Row>
                    <Col md={8}>
                        .col-md-8
                        <Row>
                            <Col md={6}>.col-md-6</Col>
                            <Col md={6}>.col-md-6</Col>
                        </Row>
                    </Col>
                    <Col md={4}>.col-md-4</Col>
                </Row>

                <hr></hr>

                <h2>Mixed: mobile and desktop</h2>
                <p>The Bootstrap v4 grid system has five tiers of classes: xs (extra small), sm (small), md (medium), lg (large), and xl (extra large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.</p>
                <p>Each tier of classes scales up, meaning if you plan on setting the same widths for xs and sm, you only need to specify xs.</p>
                <Row>
                    <Col xs={12} md={8}>.col-12 .col-md-8</Col>
                    <Col xs={6} md={4}>.col-6 .col-md-4</Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>.col-6 .col-md-4</Col>
                    <Col xs={6} md={4}>.col-6 .col-md-4</Col>
                    <Col xs={6} md={4}>.col-6 .col-md-4</Col>
                </Row>
                <Row>
                    <Col xs={6}>.col-6</Col>
                    <Col xs={6}>.col-6</Col>
                </Row>

                <hr></hr>

                <h2>Mixed: mobile, tablet, and desktop</h2>
                <p></p>
                <Row>
                    <Col xs={12} sm={6} lg={8}>.col-12 .col-sm-6 .col-lg-8</Col>
                    <Col xs={6} lg={4}>.col-6 .col-lg-4</Col>
                </Row>
                <Row>
                    <Col xs={6} sm={4}>.col-6 .col-sm-4</Col>
                    <Col xs={6} sm={4}>.col-6 .col-sm-4</Col>
                    <Col xs={6} sm={4}>.col-6 .col-sm-4</Col>
                </Row>

            </Container>
        </div>
    );
}

export default App;
