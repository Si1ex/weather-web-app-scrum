import React from 'react';

const SpotTableRow = ({
  spot,
  index,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleDeleteClick,
}) => {
  return (
    <tr className="">
      <td id="titleField" className="relative h-10  min-w-[200px]">
        <input
          name="name"
          type="text"
          id={index}
          index={index}
          className=" lg:col-start-1 lg:col-span-2 relative h-10 w-full min-w-[200px] peer rounded-[7px] border border-blue-gray-200 border-t-transparent bg-gradient-to-r from-blue-100 to-indigo-50 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 "
          defaultValue={spot.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td id="latlongContainer">
        <input
          type="number"
          index={index}
          id={index}
          onChange={handleEditFormChange}
          name="latitude"
          className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200"
          placeholder="lat"
          defaultValue={spot.latitude}
        />
        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all ">
          Lat
        </label>
      </td>
      <td id="longitudeField" className=" ">
        <input
          type="number"
          index={index}
          id={index}
          name="longitude"
          onChange={handleEditFormChange}
          className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 "
          defaultValue={spot.longitude}
        />
        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          lon
        </label>
      </td>
      <td className="px-4">
        <button
          index={index}
          onClick={handleDeleteClick}
          className="ring-2 ring-white ring-opacity-40 w-full px-5 rounded-xl bg-red-300 hover:bg-red-400 active:bg-red-500 active:text-white"
        >
          Poista
        </button>
      </td>
    </tr>
  );
};

export default SpotTableRow;
