import React, { useState, useEffect } from 'react'
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function Home() {


    const [plants, setPlants] = useState([])

    const loadPlants = async () => {
        toast.loading("Plant loading...")

        const response = await axios.get('http://localhost:8000/plants')

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
                    />)
                })
            }
            <Toaster />
        </div>
    )
}

export default Home