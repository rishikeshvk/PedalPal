import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useDispatch, useSelector} from 'react-redux'
import {getAllBicycles} from '../redux/actions/bicycleActions'

function Home() {
    const {bicycles} = useSelector(state => state.bicycleReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBicycles())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <DefaultLayout>
            <h1>Home Page</h1>
            <h1>The length of bicycles array is {bicycles.length}</h1>
        </DefaultLayout>
    )
}

export default Home