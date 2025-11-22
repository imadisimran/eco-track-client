import React, { useRef } from 'react';
import { differenceInDays } from 'date-fns';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';

const CreateChallengeModal = ({ setChallenges, challenges }) => {

  const formRef = useRef()
  const { user } = useAuth()
  const axiosInstance = useAxios()


  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;
    const target = e.target.target.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const start = new Date(startDate)
    const end = new Date(endDate)
    const duration = differenceInDays(end, start)
    const newChallenge = {
      title,
      category,
      startDate,
      endDate,
      target,
      description,
      imageUrl,
      duration,
      createdBy: user.email,
      participants:0,
    };
    // console.log(form.startDate.value,form.endDate.value)
    // console.log(newChallenge)
    axiosInstance.post('/challenges', newChallenge)
      .then(data => {
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `New Challenge Created Successfully`,
            timer: 2000,
          });
          const newChallenges = [newChallenge, ...challenges]
          setChallenges(newChallenges)
        }
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err)
      })

    formRef.current.close();
  };

  return (
    <>
      {/* 1. Trigger Button */}
      <button
        className="btn-primary shadow-lg"
        onClick={() => formRef.current.showModal()}
      >
        + Create New Challenge
      </button>

      {/* 2. The Modal Structure */}
      <dialog ref={formRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-4xl bg-base-100 text-[#1A237E]">

          {/* Modal Header */}
          <h3 className="font-bold text-3xl text-center mb-2">Create New Challenge</h3>
          <p className="text-center opacity-70 mb-8">Fill in the details to launch a new eco-initiative.</p>

          {/* Main Data Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Row 1: Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control flex flex-col md:flex-row">
                <label className="label font-semibold mr-3">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., Plastic Free July"
                  className="input input-bordered bg-white border-gray-300 focus:border-[#00C853] focus:outline-none"
                  required
                />
              </div>
              <div className="form-control flex flex-col md:flex-row">
                <label className="label font-semibold mr-3">Category</label>
                <select
                  name="category"
                  className="select select-bordered bg-white border-gray-300 focus:border-[#00C853] focus:outline-none"
                  required
                  defaultValue={'Select a category'}
                >
                  <option disabled>Select a category</option>
                  <option>Waste Reduction</option>
                  <option>Energy Conservation</option>
                  <option>Water Conservation</option>
                  <option>Sustainable Transport</option>
                  <option>Green Living</option>
                </select>
              </div>
            </div>

            {/* Row 2: Dates & Duration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="form-control flex flex-col md:flex-row">
                <label className="label font-semibold mr-3">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="input input-bordered bg-white border-gray-300 focus:border-[#00C853]"

                  required
                />
              </div>
              <div className="form-control flex flex-col md:flex-row">
                <label className="label font-semibold mr-3">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="input input-bordered bg-white border-gray-300 focus:border-[#00C853]"

                  required
                />
              </div>
              {/* <div className="form-control flex flex-col md:flex-row">
                <label className="label font-semibold mr-3">Duration (Days)</label>
                <input
                  type="number"
                  name="duration"
                  placeholder="e.g., 10"
                  className="input input-bordered bg-white border-gray-300 focus:border-[#00C853]"

                  required
                />
              </div> */}
            </div>

            {/* Row 3: Target & Description */}
            <div className="form-control flex flex-col md:flex-row">
              <label className="label font-semibold mr-3">Target Goal</label>
              <input
                type="text"
                name="target"
                placeholder="e.g., Reduce household waste by 50%"
                className="input input-bordered bg-white border-gray-300 focus:border-[#00C853]"

                required
              />
            </div>

            <div className="form-control flex flex-col md:flex-row">
              <label className="label font-semibold mr-3">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24 bg-white border-gray-300 focus:border-[#00C853]"
                placeholder="Describe the rules and motivation..."

                required
              ></textarea>
            </div>

            {/* Row 4: Image URL */}
            <div className="form-control flex flex-col md:flex-row">
              <label className="label font-semibold mr-3">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                placeholder="https://..."
                className="input input-bordered bg-white border-gray-300 focus:border-[#00C853]"

              />
              {/* Small preview if URL exists */}
            </div>

            {/* Submit Button Block */}
            <div className="mt-6">
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Launch Challenge
              </button>
            </div>
          </form>

          {/* DaisyUI Modal Action: Close Button */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-red-100 text-red-600 border-none hover:bg-red-200">Cancel</button>
            </form>
          </div>

        </div>
      </dialog>
    </>
  );
};

export default CreateChallengeModal;