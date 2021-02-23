import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import IPhoto from './IPhoto';

function Photos() {

  let neunPhotos: Array<IPhoto> = new Array<IPhoto>();

  const [photosInState, setPhotosInState] = useState(neunPhotos);

  // Ursprüngliche Variante. Problem: Fotos werden ständig geholt, wie im Loop. Dabei ist die Komponente nur durch Routing-Link an die App angeschlossen.
  // Vermutung: useEffect wird aufgerufen nach ComponentDidUpdate
  // Docs: effects run for every render and not just once
  //
  // useEffect(() => {
  //   /* todo #8 */
  //   fetch('http://jsonplaceholder.typicode.com/photos')
  //     .then(response => response.json())
  //     .then(arrFromJson => {
  //       neunPhotos = arrFromJson.slice(0, 9);
  //       console.log('neunPhotos aus Photos.tsx :>> ', neunPhotos);
  //       setPhotosInState(neunPhotos);
  //     })
  //   /* todo #9 */
  // }
  // )

  // Neuer Versuch. Ziel: aus dem Fetch-/useEffect-Loop rauszukommen
  const getData = () => {
    return fetch('http://jsonplaceholder.typicode.com/photos')
      .then(response => {
        return response.json()
      })
  }

  useEffect(() => {
    getData().then(arrFromJson => {
      neunPhotos = arrFromJson.slice(0, 9);
      console.log('neunPhotos aus Photos.tsx :>> ', neunPhotos);
      setPhotosInState(neunPhotos);
    })
  }, [])

  // Warum noch ein leeres Array als zweites Argument bei useEffect?
  // Hier die Erklärung: https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  // todo #20

  // let ph = Photo;
  // console.log('ph :>> ', ph);

  /* todo #12 */
  // let photos = neunPhotos.map(item => {
  //   return <Photo key={item.id} photo={item} />
  // })
  // console.log('photos :>> ', photos);


  return (
    <div id="container">
      <p>Photos works</p>
      {
        photosInState.map((item: IPhoto) => (
          <Photo key={item.id} photo={item} />
        ))
      }
    </div>
  )
}
export default Photos;