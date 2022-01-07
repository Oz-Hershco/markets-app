import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DetailsDialogBox from '../DetailsDialogBox/DetailsDialogBox';

export default function MarketsList({ list }) {

    const [modalShow, setModalShow] = useState(false);
    const [selectedRowDetails, setSelectedRowDetails] = useState(2);

    
    const columns = [
        {
            field: 'exchange',
            headerName: 'Exchange',
            editable: true,
        },
        {
            field: 'regularMarketChange',
            headerName: 'Change',
            type: 'number',
            editable: true,
        },
        {
            field: 'regularMarketChangePercent',
            headerName: 'Change %',
            editable: true,
        },
        {
            field: 'regularMarketPreviousClose',
            headerName: 'Previous Close',
            width: 125,
            editable: true,
        },
        {
            field: 'regularMarketPrice',
            headerName: 'Price',
            editable: true,
        },
    ];

    const rows = list.map((object, i) => {
        return {
            id: i,
            exchange: object.exchange,
            regularMarketChange: object.regularMarketChange.raw,
            regularMarketChangePercent: object.regularMarketChangePercent.fmt,
            regularMarketPreviousClose: object.regularMarketPreviousClose.fmt,
            regularMarketPrice: object.regularMarketPrice.fmt,
        }
    });


    const handleRowClick = (params) => {
        setSelectedRowDetails(list[params.id]);
        setModalShow(true);
    }
    return (
        <>
            <div style={{ marginTop: 50, height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    disableSelectionOnClick
                    onRowClick={handleRowClick}
                />
            </div>
            <DetailsDialogBox details={selectedRowDetails} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
