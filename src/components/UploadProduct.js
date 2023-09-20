import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { storage, db } from '../firebase.mjs';

const category = [
    { key: 1, value: "Baby Care" },
    { key: 2, value: "Personal Care" },
    { key: 3, value: "Sports & Nutrition" },
    { key: 4, value: "Generic Medicine" },
    { key: 5, value: "Covid Prevention" },
    { key: 5, value: "Diabetes" }
]

const UploadProduct = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    const [categoryvalue, setcategory] = useState("")
    const [Images, setImages] = useState(null)
    const [quantity, setquantity] = useState(1)
    const [error, setError] = useState('')
    const titlechange = (event) => {
        settitle(event.currentTarget.value)
    }
    const descchange = (event) => {
        setdesc(event.currentTarget.value)
    }
    const pricechange = (event) => {
        setprice(event.currentTarget.value)
    }
    const onchangecategory = (event) => {
        setcategory(event.currentTarget.value)
    }
    const onchangequantity = (event) => {
        setquantity(event.currentTarget.value)
    }
    const types = ['image/png', 'image/jpeg' , 'image/html' , 'image/svg' , 'image/webp']
    const productImgHandler = (e) => {
        let selectedfile = e.target.files[0]
        if (selectedfile && types.includes(selectedfile.type)) {
            setImages(selectedfile)
            setError('')
        } else {
            setImages(null)
            setError('Please select a valid image type png or jpeg')
        }
    }

    const addproduct = (e) => {
        e.preventDefault()
        const upload = storage.ref(`product-image/${Images.name}`).put(Images);
        upload.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress)
        }, err => {
            setError(err.message)

        }, () => {
            storage.ref(`product-image`).child(Images.name).getDownloadURL().then(url => {
                db.collection('Product').add({
                    Title: title,
                    Description: desc,
                    Price: Number(price),
                    category: categoryvalue,
                    images: url,
                    quantity: Number(quantity)
                }).then(() => {
                    settitle('')
                    setdesc('')
                    setImages('')
                    setprice(0)
                    setcategory('')
                    setquantity(0)
                    setError('')
                    document.getElementById('file').value = '';
                }).catch(err => setError(err.message));
            })
        })
    }

    return (
        <>
            <div className="container" style={{ margin: '2rem auto' }}>
                <div style={{ margin: '2rem auto', textAlign: 'center' }}>
                    <h2>Upload your Product here</h2>
                </div>

                <form onSubmit={addproduct}>
                    {/* Dropzone */}
                    <label htmlFor="product_img">Product Image</label>
                    <br />
                    <input type="file" className='form-control' onChange={productImgHandler} id='file' />
                    {/* title */}
                    <label className="my-3">Title</label>
                    <input className="my-1" onChange={titlechange} value={title} />
                    <br />
                    <br />
                    {/* description */}
                    <label className="my-3">Description</label>
                    <textarea className="my-1" onChange={descchange} value={desc} />
                    <br />
                    <br />
                    {/* price */}
                    <label className="my-3">Price</label>
                    <input className="my-1" onChange={pricechange} value={price} type="number" />
                    <br />
                    <br />
                    {/* category */}
                    <label className="my-3">Category</label>
                    <select onChange={onchangecategory} className="my-3">

                        {category.map(item => (
                            <option className="my-1" key={item.key} value={item.key}>{item.value}</option>
                        ))}

                    </select>
                    <br />
                    <br />
                    {/* countInStock */}
                    <label className="my-3">Quantity</label>
                    <input className="my-1" onChange={onchangequantity} value={quantity} type="number" />
                    <br />
                    <br />
                    {/* submit button */}
                    <button className="btn btn-primary my-3" onClick={onsubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default UploadProduct