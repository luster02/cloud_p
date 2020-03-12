import React, { Suspense, useState } from 'react';
import { Routes } from './routes/index'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Sidenav from './components/Sidenav'
import { LoaderSpinner } from './components/LoaderSpiner'


function App() {

  let [isSide, setSide] = useState(true)

  const classSide = isSide ? 'd-flex toggled ' : 'd-flex '

  const cathTogg = (side) => {
    if (side) {
      setSide(isSide = true)
    } else {
      setSide(isSide = false)
    }
  }

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <div className={classSide} id="wrapper">
        <div className="d-md-block d-lg-block d-xl-block d-sm-none d-none">
           <Sidenav
            togg={cathTogg}
          />
        </div>
        <div id="page-content-wrapper">
          <Routes />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
