import React, { useState, useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBicycles} from '../redux/actions/bicycleActions'
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
const {RangePicker} = DatePicker
function Home() {
    const {bicycles} = useSelector(state => state.bicyclesReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalBicycles , setTotalbicycles] = useState([])
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllBicycles())
    }, [])

    useEffect(() => {

        setTotalbicycles(bicycles)
        
    }, [bicycles])


    function setFilter(values){

        var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

        var temp=[]

        for(var bicycle of bicycles){

              if(bicycle.bookedTimeSlots.length == 0){
                  temp.push(bicycle)
              }
              else{

                   for(var rental of bicycle.bookedTimeSlots) {

                       if(selectedFrom.isBetween(rental.from , rental.to) ||
                       selectedTo.isBetween(rental.from , rental.to) || 
                       moment(rental.from).isBetween(selectedFrom , selectedTo) ||
                       moment(rental.to).isBetween(selectedFrom , selectedTo)
                       )
                       {

                       }
                       else{
                           temp.push(bicycle)
                       }

                   }

              }

        }


        setTotalbicycles(temp)


    }

    return (
        <DefaultLayout>

             <Row className='mt-3' justify='center'>
                 
                 <Col lg={20} sm={24} className='d-flex justify-content-left'>

                     <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                 
                 </Col>

             </Row>

              {loading == true && (<Spinner/>)}


              
              <Row justify='center' gutter={16}>

                   {totalBicycles.map(bicycle=>{
                       return <Col lg={5} sm={24} xs={24}>
                            <div className="bicycle p-2 bs1">
                               <img src={bicycle.image} className="carimg"/>

                               <div className="bicycle-content d-flex align-items-center justify-content-between">

                                    <div className='text-left pl-2'>
                                        <p>{bicycle.name}</p>
                                        <p> Rent Per Hour {bicycle.rentPerHour} /-</p>
                                    </div>

                                    <div>
                                        <button className="btn1 mr-2"><Link to={`/rental/${bicycle._id}`}>Book Now</Link></button>
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