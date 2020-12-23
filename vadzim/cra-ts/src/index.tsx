import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactElement from './React-Element';
import ComponentProps from './Component-Props';
import Photos from './Photos';
import ClassComponent from './Class-Component';
import LifecycleMethods from './Lifecycle-Methods';
import PhotosAsClass from './PhotosAsClass';
import MyPureComponent from './Pure-Component';
import PWConfirm from './Forms';
import LSUPhotos from './Lifting-State-Up/LSUPhotos'
import CardParent from './Children';
import AppWithRouting from './AppWithRouting';
import Redux from './Redux';



const jsxEl = <p>JSX paragraph</p>;
/* todo #5 */
const compEl = React.createElement(ReactElement, jsxEl);
// console.log('compEl :>> ', compEl);
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ReactElement /> */}
    {/* todo #6 */}
    <h2>compEl</h2>
    {/* {compEl}     */}
    {/* todo #7 */}
    <h2>compEl.props.props.children</h2>
    {/* {compEl.props.props.children} */}
    <h2>Component Props</h2>
    {/* <ComponentProps numberOfStars={5}/> */}
    <h2>Comp Props Übung</h2>
    {/* <Photos /> */}
    <h2>Klassenkomponente</h2>
    {/* <p>1
    <ClassComponent /> */}
{/* todo #10 */}
    {/* </p>
    <p>
      2
    <ClassComponent />
    </p>
    <ClassComponent /> */}
  <h2>Lebenszyklusmethoden</h2>
  {/* <LifecycleMethods forUpdate='force' /> */}
  <h2>Lebenszyklus Live Example</h2>
  {/* <PhotosAsClass /> */}
  <h2>Hooks</h2>
  {/* <Photos /> */}
  <h2>Pure Component</h2>
  {/* <MyPureComponent /> */}
  <h2>Forms</h2>
  <PWConfirm />
  <h2>Lifting State Up</h2>
  <LSUPhotos />
  <h2>Props.Children</h2>
  {/* <CardParent /> */}
  <h2>Redux</h2>
  {/* <Redux /> */}
<h2>Routing</h2>
{/* <AppWithRouting /> */}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
