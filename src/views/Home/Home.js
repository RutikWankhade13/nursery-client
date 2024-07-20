import React, { useState, useEffect } from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import imgAdd from "./add.png"
import { Link } from 'react-router-dom'

function Home() {


    const [plants, setPlants] = useState([])

    const loadPlants = async () => {

        toast.loading("Plant loading...")

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

        toast.dismiss()

        toast.success("Plant loaded successfully ")

        setPlants(response.data.data);
    }

    useEffect(() => {
        loadPlants()
    }, [])

    return (
        <div>
            <h1>Plants</h1>

            {
                plants.map((plantobj, i) => {
                    const {
                        _id,
                        name,
                        category,
                        price,
                        image,
                        discription
                    } = plantobj

                    return (<PlantCard
                        key={i}
                        _id={_id}
                        name={name}
                        category={category}
                        price={price}
                        image={image}
                        discription={discription}
                        loadPlants={loadPlants}
                        />
                )
                })
            }
            <Toaster />
            <Link to="/add">
            <img alt='' src={imgAdd} className='btn-add'/>
            </Link>
        </div>
    )
}

export default Home