import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Login() {
    return (
        <>
            <Container>
                <Row >
                    <Col>
                        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', height:'90vh'}}>
                            <h1 style={{textAlign:'center'}}>Welcome to Markets App!</h1>
                            <p style={{textAlign:'center'}}>Please sign in to continue</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
