import React, { useState, useEffect, cloneElement } from 'react';
import SpotTableRow from './SpotTableRow';
import { nanoid } from 'nanoid';

const SpotTable2 = ({ collection, selectedIndex, handleDataAdded }) => {
  if (!collection.length) {
    return (
      <div>
        <p>Kokoelmaa ei vielä valittu</p>
      </div>
    );
  }
  /*
  useEffect(() => {
    setSpots(collection[selectedIndex].spots);
    setEditedSpots(collection[selectedIndex].spots);
    setCollectionTitle(collection[selectedIndex].name);
    setEditCollectionData(collection[selectedIndex]);
    setFinalData(collection)//Final data on kaikki data
  }, [collection[selectedIndex]]);*/

  const [spots, setSpots] = useState(collection[selectedIndex].spots);
  const [finalData, setFinalData] = useState(collection); //Final data on kaikki data
  const [editedSpots, setEditedSpots] = useState(collection);
  //const [collectionTitle, setCollectionTitle] = useState(collection.name);
  const [editCollectionData, setEditCollectionData] = useState(collection); //valitun kollektionin data
  const [addFormData, setAddFormData] = useState({
    name: '',
    latitude: '',
    longitude: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    //  const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    collection[selectedIndex].name = fieldValue;
    //value of new title name
    //const newTitle = event.target.value;
    /*const newEditedSpots = [...editedSpots, { name: newTitle }]
    setEditedSpots(newEditedSpots)
    const finalDataCopy=[finalData];  //copy of final data
    finalDataCopy[selectedIndex]=fieldValue;
    //setFinalData(...finalDataCopy);
    console.log("COLLECTION");
    console.log(finalData);*/
    //setEditCollectionData(newCollectionData);
    // setSpots(newCollectionData)
  };

  const handleAddFormSubmit = (event) => {
    //New data row (spot)
    event.preventDefault();
    const newSpot = {
      //create new spot with correct fields
      id: nanoid(),
      name: addFormData.name,
      latitude: addFormData.latitude,
      longitude: addFormData.longitude,
    };
    const newSpots = [...spots, newSpot];

    collection[selectedIndex].spots.push(newSpot);
    //  setEditedSpots(newSpots);
    setSpots(newSpots);
  };
  const handleNewCollectionSubmit = (event) => {
    event.preventDefault();
    console.log('Toimiiko');
    const newcol = {
      //create new spot with correct fields
      id: nanoid(),
      name: addFormData.name,
      spots: [
        {
          id: nanoid(),
          name: '',
          latitude: '',
          longitude: '',
        },
      ],
    };
    //const newSpots = [...spots, newCol];
    //console.log(newcol)
    collection.push(newcol);
    //console.log(collection)
    //setEditedSpots(newSpots);
    //setSpots(newSpots);
    let newData = collection;
    handleDataAdded(newData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    //const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const fieldIndex = event.target.getAttribute('index');

    collection[selectedIndex].spots[fieldIndex].name = fieldValue;
    //const newFormData = { editFormData }

    /*
    const newFormData = editedSpots;// copy of collection
    newFormData[event.target.id][fieldName] = fieldValue;
    //newFormData["id"] = event.target.id.value
    setSpots(newFormData);
    console.log('edit Form Data: ');
    console.log(spots);*/
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    console.log('ALL DATA GOING TO SERVER');
    console.log(collection);

    /* console.log('Spots on submit')
    console.log(spots)
    const newCollectionData = { ...editCollectionData };
    newCollectionData['spots'] = spots;
    setEditCollectionData(newCollectionData);
    console.log('Collection to be sent to sever :');
    console.log(JSON.stringify(editCollectionData));
    const finalDataCopy=[finalData];//copy of final data
    finalDataCopy[selectedIndex]=editCollectionData
    setFinalData(...finalDataCopy);
    console.log("ALL USER DATA going to SERVER: ")
    console.log(finalData)
    collection=finalData*/

    //Ei toimi
    await fetch('${process.env.URL}/api/collection?user=testi5@testi5.com', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/JSON' },
      body: editCollectionData,
    });
  };

  const CollectionTitle = (name) => {
    return (
      <input
        id="defaultTitle"
        name="name"
        onChange={handleTitleChange}
        defaultValue={collection[selectedIndex].name}
        className="col-start-1 col-span-3 h-full w-full rounded-[7px] border border-blue-gray-200 bg-gradient-to-r from-blue-100 to-indigo-50 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 "
        placeholder="Otsikko "
      />
    );
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    const fieldIndex = event.target.getAttribute('index');
    const newSpots = [...spots];
    collection[selectedIndex].spots.splice(fieldIndex, 1);
    setSpots(newSpots);
  };

  return (
    <div className="app-container">
      <form id="editableForm" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <td>
                <CollectionTitle handle name={collection[selectedIndex].name} />
              </td>
            </tr>
            <tr>
              {collection[selectedIndex].spots.length > 0 ? (
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
            {collection[selectedIndex].spots.length > 0 ? (
              collection[selectedIndex].spots.map((spot, index) => (
                <SpotTableRow
                  key={spot.id}
                  spot={spot}
                  index={index}
                  onChange={handleEditFormChange}
                  handleEditFormChange={handleEditFormChange}
                  handleDeleteClick={handleDeleteClick}
                />
              ))
            ) : (
              <tr>
                <td>
                  <div className="bg-yellow-100 border-white rounded-xl p-5 font-bold border-black border-2 ">
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
      <form onSubmit={handleNewCollectionSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <button
                  className="ring-2 ml-2 ring-white ring-opacity-40 mt-2 w-full px-5 rounded-xl  bg-pink-300 hover:bg-purple-300 active:bg-purple-400   "
                  type="submit"
                >
                  Tee uusi kokoelma
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
              <td className="grid grid-cols-2 gap-4">
                <button
                  className="ring-2 ml-2 ring-white ring-opacity-40 mt-2 w-full px-5 rounded-xl  bg-pink-300 hover:bg-purple-300 active:bg-purple-400   "
                  type="submit"
                  form="editableForm"
                  onSubmit={handleEditFormSubmit}
                >
                  Tallenna Muutokset
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
