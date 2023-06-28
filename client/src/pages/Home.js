import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useDispatch, useSelector} from 'react-redux'

function Home() {
    const {bicycles} = useSelector(state => state.bicycleReducer)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllBicycles())
    // }, [])

    return (
        <DefaultLayout>
            <h1>Home Page</h1>
            <h1>The length of bicycles array is {bicycles.length}</h1>
        </DefaultLayout>
    )
}

export default Home