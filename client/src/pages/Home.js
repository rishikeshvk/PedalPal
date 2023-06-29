import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBicycles} from '../redux/actions/bicycleActions'
import { Button, Row, Col} from 'antd';
import Spinner from '../components/Spinner';
function Home() {
    const {bicycles} = useSelector(state => state.bicycleReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getAllBicycles())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <DefaultLayout>

                {loading == true && (<Spinner/>)}
            
            <Row justify='center' gutter={16} className='mt-5'>
                {bicycles.map(bicycle=>{
                    return <Col lg={5} sm={24} xs={24}>
                        <div className='bicycle p-2 bs1 mt-3'>
                            <img src={bicycle.image} className='bicycleimg'/>
                            <div className='bicycle-content d-flex align-items-center justify-content-between'>
                                <div>
                                    <p>
                                        {bicycle.name}
                                    </p>
                                    <p>
                                        {bicycle.rentPerHour}Rent Per Hour/-
                                    </p>
                                </div>
                                <div>
                                    <button className='btn1 mr-2'>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                            </div>

                    </Col>
                })}
            </Row>
        </DefaultLayout>
    )
}

export default Home