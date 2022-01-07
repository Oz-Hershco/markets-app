import React from 'react'
import { Table, Modal, Button } from 'react-bootstrap';
import './DetailsDialogBox.css';

export default function DetailsDialogBox(props) {

    const details = props.details;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {`${details.exchange} Exchange Details`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='DetailsDialogBox-Details-Container'>
                    <p>
                        {`Below you can find a detailed information about the ${details.exchange} exchange you selected:`}
                    </p>

                    <Table responsive hover bordered size="sm">
                        <tbody>
                            {
                                Object.entries(details).map(([key, value], i) => {
                                    return (
                                        <tr key={i}>
                                            <td className='DetailsDialogBox-Details-Titles'>{key}</td>
                                            <td>{typeof value === 'object' ? value.fmt : value.toString()}</td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </Table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
