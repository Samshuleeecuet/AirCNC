import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Loader/Loader';

const Rooms = () => {
    const [rooms,setrooms] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('./room.json')
        .then(response=> response.json())
        .then(data=>{
            setrooms(data)
            setLoading(false)
        })
    },[])
    if(loading){
        return <Loader/>
    }
    return (
        <Container>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
                {
                    rooms.map((room,index)=>
                        <Card room={room} key={index}/>
                    )
                }

            </div>
            
        </Container>
    );
};

export default Rooms;