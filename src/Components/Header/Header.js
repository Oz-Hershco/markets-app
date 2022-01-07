import React from 'react'
import { signInAnonymously, auth } from '../../firebase';
import { Container, Navbar } from 'react-bootstrap';

export default function Header({isLoggedIn}) {



    const handleSignIn = () => {
        signInAnonymously(auth)
            .then(() => {
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage, errorCode);
            });
    }

    const handleSignOut = () => {
      auth.signOut();
    }

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Markets
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                isLoggedIn ?
                                    (
                                        <a onClick={handleSignOut} href="#">Sign Out</a>
                                    ) :
                                    (
                                        <a onClick={handleSignIn} href="#">Sign In</a>
                                    )
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
