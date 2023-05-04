import React from 'react';

export default function CollectionBox({ markers, handleCollectionSelection }) {
  const collections = markers; //Näytää kaikki käyttäjän kokoelmat
  const spotLength = []; //lasketaan montako sijaintia jokaiseen kokoelmaan on tallennettu

  for (var i = 0; i < collections.length; i++) {
    if (Array.isArray(collections[i].spots)) {
      spotLength.push(collections[i].spots.length);
    }
  }

  const collectionCards = collections.map((collection, index) => {
    //tehdään kokoelmista kortteja
    const shortSpotList = [];
    const spotsToShow = 4; //Montako nimeä korttiin mahtuu
    for (var i = 0; i < spotsToShow; i++) {
      if (collection.spots[i]) {
        shortSpotList.push(collection.spots[i]);
      }
    }

    const shortSpotsListMap = shortSpotList.map((spot, index) => {
      return <h3 key={spot.id + 'list'}>{spot.name}</h3>;
    }); //Sijainnin nimi

    const spotsNotShown = () => {
      //Lasketaan sijainnit, joita ei näytetä kortissa
      if (collection.spots.length - shortSpotsListMap.length > 0)
        return (
          <h1>
            <p className="inline font-semibold">+</p>
            {collection.spots.length - shortSpotList.length} muuta
          </h1>
        );
      else return <></>;
    };

    return (
      //tässä muodostetaan kortit
      <div
        key={collection.id}
        id="radiodiv"
        onClick={(e) => handleCollectionSelection(collection, index)}
        className="p-5 mb-5 snap-center flex-none snap-always rounded-3xl border-solid border-2  border-gray-500 shadow-lg lg:hover:border-green-900/50"
      >
        <h3 className="content-center font-semibold pl-2 rounded-3xl  ">
          {collection.name}
        </h3>
        <div className="pl-5 py-2 ">{shortSpotsListMap}</div>
        <div className="rounded-lg ">{spotsNotShown()}</div>
      </div>
    );
  });
  return (
    <>
      <div>
        <h1 className="text-xl text-sky-600/100">Omat kokoelmat</h1>
      </div>
      {collections.length == 0 ? (
        <div className=" gap-5 px-5 flex flex-nowrap overflow-x-auto snap-x snap-mandatory">
          {collectionCards}
        </div>
      ) : (
        <p className="mt-5 text-md text-sky-600/100">
          Sinulla ei ole kokoelmia!
        </p>
      )}
    </>
  );
}
