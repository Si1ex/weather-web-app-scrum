import React from 'react';

const SpotTurhaKoodi = ({
  spot,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
}) => {
  return (
    <h1>
      turhaa koodia{' '}
      {/**
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Anna nimi"
          name="name"
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Aseta leveysaste"
          name="latitude"
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Aseta pituusaste"
          name="longitude"
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr> */}
    </h1>
  );
};

export default SpotTableRow;
