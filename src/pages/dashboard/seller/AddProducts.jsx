import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import axios from "axios";
import baseUrl from "../../../hook/baseUrl";


const AddProducts = () => {

     const { user } = useAuth();
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm();
     const dataSubmit = (data) => {
          const title = data.title;
          const image = data.image;
          const brand = data.brand;
          const stock = data.stock;
          const price = parseFloat(data.price);
          const category = data.category;
          const description = data.description;
          const sellerEmail = user.email;


          const product = {
               title,
               image,
               brand,
               price,
               category,
               description,
               sellerEmail
          };

          const token = localStorage.getItem('access-token')


          axios.post(`${baseUrl}/add-products`, product, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          }).then(res => console.log(res));

     }

     return (
          <div>
               <h1 className="text-4xl text-center font-bold">Add Product</h1>

               <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Title</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Title"
                              className="input input-bordered"
                              {...register('title', { required: 'Product Title is required' })}
                         />
                         {errors.title && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Image Url</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Image"
                              className="input input-bordered"
                              {...register('image', { required: 'Product Image is required' })}
                         />
                         {errors.title && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Brand</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Brand Name"
                              className="input input-bordered"
                              {...register('brand', { required: 'Brand Name is required' })}
                         />
                         {errors.brand && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Price</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Price"
                              className="input input-bordered"
                              {...register('price', { required: 'Product Price is required' })}
                         />
                         {errors.price && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Stock</span>
                         </label>
                         <input
                              type="number"
                              placeholder="Stock Quantity"
                              className="input input-bordered"
                              {...register('stock', { required: 'Stock Quantity is required' })}
                         />
                         {errors.stock && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Category</span>
                         </label>
                         <input
                              type="text"
                              placeholder="Product Category"
                              className="input input-bordered"
                              {...register('category', { required: 'Category is required' })}
                         />
                         {errors.category && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Description</span>
                         </label>
                         <textarea
                              rows="10" cols="100"
                              type="text"
                              placeholder="Description"
                              className="input input-bordered"
                              {...register('description', { required: 'Description is required' })}
                         />
                         {errors.description && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="form-control mt-6">
                         <button type="submit" className="btn btn-primary">
                              Add Product
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default AddProducts;