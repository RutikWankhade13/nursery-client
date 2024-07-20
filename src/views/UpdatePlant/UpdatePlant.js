import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function UpdatePlant() {

    const { id } = useParams();

    const [name, setname] = useState('')
    const [category, setcategory] = useState('')
    const [image, setimage] = useState('')
    const [price, setprice] = useState(0)
    const [discription, setdiscription] = useState('')

    const updateplant = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`, {
            name: name,
            price: price,
            discription: discription,
            image: image,
            category: category
        })
        toast.success(response.data.message)

    }

    const loadPlant = async (id) => {
        if (!id) {
            return
        }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

        const plantdata = response.data.data

        const { name, category, image, price, discription } = plantdata

        setname(name)
        setimage(image)
        setdiscription(discription)
        setprice(price)
        setcategory(category)

        toast.success(response.data.message)
    }


    useEffect(() => {
        loadPlant(id)
    }, [id])

    return (
        <div>
            <h1>Update Plant : {id}</h1>

            <form>

                <input
                    className='plant-input'
                    type='text'
                    placeholder='Enter plant name '
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />

                <input
                    className='plant-input'
                    type='number'
                    placeholder='Enter plant price '
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                />

                <input
                    className='plant-input'
                    type='text'
                    placeholder='Enter plant discription '
                    value={discription}
                    onChange={(e) => setdiscription(e.target.value)}
                />

                <input
                    className='plant-input'
                    type='text'
                    placeholder='Enter plant image url '
                    value={image}
                    onChange={(e) => setimage(e.target.value)}
                />

                <img className='image-preview' alt='' src={image} />

                <input
                    className='plant-input'
                    type='text'
                    placeholder='Enter plant category '
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                />

                <button type='button' onClick={updateplant} > Update Plant </button>

            </form>
            <br />

            <Link to="/">See all plants</Link>
            <Toaster />
        </div>

    )
}

export default UpdatePlant