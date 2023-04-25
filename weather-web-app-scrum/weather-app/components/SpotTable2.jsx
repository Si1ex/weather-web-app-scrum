import React, { useState, useEffect } from 'react';
import SpotTableRow from './SpotTableRow';
import { nanoid } from 'nanoid';

const SpotTable2 = (props) => {
  // console.log('Passed collection:')
  //  console.log(props)
  if (!props.collection.spots) {
    //  console.log(props)
    return (
      <div>
        <p>Ei Vielä lisättyjä</p>
      </div>
    );
  }

  useEffect(() => {
    setSpots(props.collection.spots);
    setEditedSpots(props.collection.spots);
    setCollectionTitle(props.collection.name);
    setEditCollectionData(props.collection);
  }, [props]);
  const [spots, setSpots] = useState(props.collection.spots);
  const [editedSpots, setEditedSpots] = useState(props.collection);
  const [collectionTitle, setCollectionTitle] = useState(props.collection.name);
  const [editCollectionData, setEditCollectionData] = useState(
    props.collection,
  );
  const [addFormData, setAddFormData] = useState({
    name: '',
    latitude: '',
    longitude: '',
  });

  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    latitude: '',
    longitude: '',
  });

  const [editSpotId, setEditContactId] = useState(null);

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
    await fetch('http://localhost:4000/api/collection?user=testi5@testi5.com', {
      method: 'POST',
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

  return (
    <div className="app-container">
      <form id="editableForm" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <td>
                <input
                  id="defaultTitle"
                  name="defaultTitle"
                  defaultValue={props.collection.name}
                  className="col-start-1 col-span-3 h-full w-full rounded-[7px] border border-blue-gray-200 bg-gradient-to-r from-blue-100 to-indigo-50 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 "
                  placeholder="Otsikko "
                />
              </td>
            </tr>
            <tr>
              {spots.length > 0 ? (
                <>
                  <th>Nimi</th>
                  <th>leveysaste</th>
                  <th>pituusaste</th>
                </>
              ) : (
                <th></th>
              )}
            </tr>
          </thead>
          <tbody>
            {spots.length > 0 ? (
              spots.map((spot, index) => (
                <SpotTableRow
                  key={spot.id}
                  spot={spot}
                  index={index}
                  onChange={handleEditFormChange}
                  handleEditFormChange={handleEditFormChange}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              ))
            ) : (
              <tr>
                <td>
                  <div className="bg-yellow-300 rounded-xl p-5 font-bold border border-black border-2 ">
                    <p>Ei lisättyjä paikkoja</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
      <h1>Lisää uusi Paikka</h1>
      <form onSubmit={handleAddFormSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={handleAddFormChange}
                  required="required"
                  placeholder={'esim.paikka 2'}
                  className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  "
                />
              </td>
              <td>
                <input
                  type="number"
                  name="latitude"
                  onChange={handleAddFormChange}
                  placeholder={'latitude'}
                  required="required"
                  className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 "
                />
              </td>
              <td>
                <input
                  type="number"
                  name="longitude"
                  onChange={handleAddFormChange}
                  placeholder={'longitude'}
                  required="required"
                  className="peer h-full w-full rounded-[7px] bg-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  "
                />
              </td>
              <td>
                <button
                  className="ring-2 ring-white ring-opacity-40 w-full px-5 rounded-xl  hover:bg-red-400 active:bg-red-500   "
                  type="submit"
                >
                  Lisää
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  className="ring-2 ml-2 ring-white ring-opacity-40 mt-2 w-full px-5 rounded-xl  bg-pink-300 hover:bg-purple-300 active:bg-purple-400   "
                  type="submit"
                  form="editableForm"
                >
                  Tallenna kokoelma
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SpotTable2;
