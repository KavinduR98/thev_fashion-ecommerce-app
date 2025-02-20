import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const confirmDeleteProduct = (id) => {
    toast.info(
      <div>
        <p>Are you sure you want to delete this product?</p>
        <div className="flex gap-2 mt-3">
          <button onClick={() => { toast.dismiss(); removeProduct(id); }} className="px-3 py-1 text-white bg-red-500 rounded">Yes</button>
          <button  onClick={() => toast.dismiss()} className="px-3 py-1 bg-gray-300 rounded">No</button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        position: "top-center", // Moves the toast to the center top of the screen
      }
    );
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/delete', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* -------List Table Title--------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* ------- Product List -------- */}

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={() => confirmDeleteProduct(item._id)} className='text-right cursor-pointer md:text-center'>X</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List