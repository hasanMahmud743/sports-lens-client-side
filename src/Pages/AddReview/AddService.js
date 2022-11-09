import React from 'react';

const AddService = () => {

    const addServices = e =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const img = form.image.value
        const prev = form.p_price.value
        const current = form.c_price.value
        const time = new Date().toLocaleTimeString()
        const text = form.placeholder.value
        console.log(title, img, prev, current, text, time)
        const service = {
            title,
            image: img,
            description: text,
            prev_price: prev,
            current_price: current,
            time,
        }

        fetch('http://localhost:5300/services',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service) 
        })

        .then(res => res.json())
        .then(data => {
            alert('Alhamdulillah! Service Updated successfully')
            e.target.reset()
        })

    }
    return (
        <div>
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="shadow-2xl bg-base-100">
        <p className='font-bold text-center text-2xl pt-3'>Add Services</p>
      <form onSubmit={addServices} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Title</span>
          </label>
          <input type="text" name='title' placeholder="Title" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input type="text" name='image' placeholder="Image" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Previous Price</span>
          </label>
          <input type="text" name='p_price' placeholder="Previous Price" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Current Price</span>
          </label>
          <input type="text" name='c_price' placeholder="Current Price" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Description</span>
          </label>
          <input type="text" name='placeholder' placeholder="Add your description here..." className="input input-bordered " />
     
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add service</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AddService;