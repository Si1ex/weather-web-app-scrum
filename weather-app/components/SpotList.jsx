import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function SpotList(props) {
  const spots = props.propsi.spots;
  // console.log("spot list" + spots.name)
  //const [inputValue, setInputValue] = useState()
  if (spots) {
    console.log('Pieni Lista');
    const shortSpotsListMap = spots.map((spot, index) => {
      return (
        <option
          className=""
          key={spot.id}
          value={[spot.name, spot.latitude, spot.longitude]}
        >
          {spot.name}
        </option>
      );
    });
    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
    };
    const handleAddTitleChange = (event) => {
      const fieldName = event.target.getAttribute('name');
      const newTitle = event.target.value;
      /*const newEditedSpots = [...editedSpots, { name: newTitle }]
      setEditedSpots(newEditedSpots)*/
      const newCollectionData = { ...editCollectionData };
      newCollectionData[fieldName] = newTitle;
      setEditCollectionData(newCollectionData);
      //console.log('Toimiiko ? ')
      console.log(editCollectionData);
    };
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
      const newSpot = {
        //create new spot with correct fields
        id: nanoid(),
        name: addFormData.name,
        latitude: addFormData.latitude,
        longitude: addFormData.longitude,
      };
      const newSpots = [...spots, newSpot];
      setSpots(newSpots);
      console.log(spots);
    };
    const handleEditFormChange = (event) => {
      event.preventDefault();
      console.log(event.target);
      console.log('name' + event.target.id);
      console.log(event.target.form);
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      //const newFormData = { editFormData }
      const newFormData = editedSpots;
      newFormData[event.target.id][fieldName] = fieldValue;
      //

      //newFormData["id"] = event.target.id.value
      /*console.log('new Form Data: ')
      console.log(newFormData)*/
      setSpots(newFormData);
      console.log('edit Form Data: ');
      console.log(spots);
    };
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
    };

    const handleEditFormSubmit = async (event) => {
      event.preventDefault();
      /* console.log('Spots on submit')
      console.log(spots)*/
      const newCollectionData = { ...editCollectionData };
      newCollectionData['spots'] = spots;
      setEditCollectionData(newCollectionData);
      console.log('Collection to be sent to sever :');
      console.log(JSON.stringify(editCollectionData));

      //Ei toimi
      await fetch('${process.env.URL}/api/collection?user=testi5@testi5.com', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(editCollectionData),
        mode: 'cors',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(editCollectionData),
      });
    };

    const handleCancelClick = () => {
      setEditContactId(null);
    };

    const handleDeleteClick = (spotId) => {
      const newSpots = [...spots];
      const index = spots.findIndex((spot) => spot.id === spotId);
      newSpots.splic;
      e(index, 1);
      setSpots(newSpots);
    };

    function handleDropdownSelection(event) {
      const selectedSpot = event.target.value.split(','); //dropdown valikossa valittu arvo [nimi,lat,long]
      setdropdownSelection(selectedSpot);
      console.log('dropdown selection:');
      console.log(selectedSpot);
      //setdropdownSelection(event.target.value)
    }
    const [inputValue, setInputValue] = useState('0');
    const [dropdownSelection, setdropdownSelection] = useState([]);
    return (
      <>
        <div
          id="titleField"
          className="lg:col-start-1 mb-4 lg:col-span-2 relative h-10 w-full min-w-[200px]"
        >
          <input
            className="col-start-1 col-span-3 h-full w-full rounded-[7px] border border-blue-gray-200 text-md bg-gradient-to-r from-blue-100 to-indigo-50 px-3 py-3 font-sans  font-normal text-blue-gray-700 outline outline-0 "
            id="titleInput"
            name="titleInput"
            defaultValue={props.propsi.name}
            placeholder="Otsikko"
          />
        </div>
        <select
          onChange={handleDropdownSelection}
          className="bg-blue-100 py-3 pl-5 w-full"
        >
          {shortSpotsListMap}
        </select>
        <div
          id="nameField"
          className="lg:col-start-1 mt-4 mb-4 lg:col-span-2 relative h-10 w-full min-w-[200px]"
        >
          <input
            className="col-start-1 col-span-3 h-full  rounded-[7px] border border-blue-gray-200 text-md bg-gradient-to-r from-blue-100 to-indigo-50 px-3 py-3 font-sans  font-normal text-blue-gray-700 outline outline-0 "
            id="nameInput"
            name="nameInput"
            defaultValue={dropdownSelection[0]}
            placeholder="nimi"
          />
        </div>
        <div className="mt-4 lg:col-span-1 gap-4 latlongContainer flex">
          <div id="latitideField" className="   h-10 w-full">
            <input
              type="number"
              id="latLabel"
              name="latitude"
              className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="lat"
              defaultValue={
                dropdownSelection[1] /**latitude from dropdown menu */
              }
            />
          </div>
          <div id="longitudeField" className="  w-full">
            <input
              type="number"
              fid="lonLabel"
              name="latitude"
              className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              defaultValue={
                dropdownSelection[2] /**longitude from dropdown menu */
              }
            />
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-2 mt-4 lg:grid-cols-none lg:col-span-2 px-4">
          <button
            onClick={(e) => handleDeleteClick(spot.id)}
            className="ring-2 ring-white ring-opacity-40 w-full px-5 rounded-xl  hover:bg-red-400 active:bg-red-500   "
          >
            Poista
          </button>
          <button
            onClick={(e) => handleCityInput(e)}
            className="ring-2 col-span-2 ring-white ring-opacity-40 w-full px-5 rounded-xl  hover:bg-purple-300 active:bg-purple-400   "
          >
            lisää
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>sm ei dataa</h1>
      </>
    );
  }
}
