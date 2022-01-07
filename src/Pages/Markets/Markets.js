import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MarketsList from '../../Components/MarketsList/MarketsList';
import { updateMarketsList } from '../../Redux/marketsSlice';

export default function Markets() {

    const marketsList = useSelector(state => state.markets.value);
    const dispatch = useDispatch();

    useEffect(() => {

        const marketListSession = JSON.parse(sessionStorage.getItem("marketList"));
        if (marketListSession) {
            console.log("Market list retrieved from session.")
            dispatch(updateMarketsList(marketListSession));
        } else {
            console.log("Market list retrieved from API.")
            var myHeaders = new Headers();
            myHeaders.append("x-api-key", "GRR8kgCistajLcKf141AJ9nVGcnlJIhWa2V18xMl");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch("https://yfapi.net/v6/finance/quote/marketSummary", requestOptions)
                .then(response => response.text())
                .then((result) => {
                    const data = JSON.parse(result).marketSummaryResponse.result;
                    dispatch(updateMarketsList(data));
                    sessionStorage.setItem("marketList", JSON.stringify(data))
                })
                .catch(error => console.log('error', error));
        }

        return () => {

        }
    }, [])

    return (
        <>
            <Container>
                {
                    marketsList.length ?
                        (
                            <MarketsList list={marketsList} />
                        ) :
                        (
                            <div style={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Spinner animation="grow" variant="primary" />
                            </div>
                        )
                }
            </Container>
        </>
    )
}
