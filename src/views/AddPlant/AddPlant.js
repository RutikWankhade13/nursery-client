import React from 'react'
import "./AddPlant.css"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {
    const [name, setname] = useState('')
    const [category, setcategory] = useState('')
    const [image, setimage] = useState('')
    const [price, setprice] = useState(0)
    const [discription, setdiscription] = useState('')

    const addPlant = async () => {
        toast.loading("Adding Plant")

        if (!name || !category || !price || !discription || !image) {
            toast.error("Please Enter all details")
            return
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
            name: name,
            price: price,
            category: category,
            image: image,
            discription: discription
        })
        toast.dismiss()
        toast.success(response.data.message)

        setname('')
        setcategory('')
        setprice('')
        setimage('')
        setdiscription('')

    }

    return (
        <div>
            <h1>
                AddPlant
            </h1>
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

                <button type='button' onClick={addPlant}> Add Plant </button>

            </form>
            <br /><br />
            <Link to="/">Show all Plants</Link>
            <Toaster />
        </div>
    )
}

export default AddPlant