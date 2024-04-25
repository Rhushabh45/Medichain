import './App.css';
import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import AddPatientComponent from './components/AddPatientComponent';
import AddDoctor from './components/AddDoctor';
import AddMedicalComponent from './components/AddMedical';
import AddPharma from './components/AddPharma';
import ViewPatientComponent from './components/ViewPatientComponent';
import ViewPharmaComponent from './components/ViewPharmaComponent';
import ViewDoctorComponent from './components/ViewDoctorComponent';
import ViewMedicalComponent from './components/ViewMedicineComponent';
import UserTypeComponent from './components/UserTypeComponent';
import PatientHome from './components/PatientHome';
import DoctorHome from './components/DoctorHome';
import MedicalHome from './components/MedicalHome';
import PharmaHome from './components/PharmaHome';
import ViewOnlyPatient from './components/ViewOnlyPatient';
import ForceLogin from './components/ForceLogin';
import AdminPanel from './components/AdminPanel';
import Loader from './components/Loader';

 
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const [currentBalance, setCurrentBalanace] = useState(null);

  const [DocStatus, setDocStatus] = useState(true);
  const [MedStatus, setMedStatus] = useState(true);

  return <>

    <div className="App">
        
        <Loader></Loader>

          {currentAccount?
            <Router>
            <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
            
            <div className='container-fluid mt-4'>
           
              <Routes> 
               
                <Route exact path='/' element={<UserTypeComponent></UserTypeComponent>}></Route>
            
                <Route exact path='/patienthome' element={<PatientHome></PatientHome>}></Route>

                <Route exact path='/doctorhome' element={<DoctorHome  DocStatus={DocStatus} setDocStatus={setDocStatus} ></DoctorHome>}></Route>
                <Route exact path='/medicalhome' element={<MedicalHome  MedStatus={MedStatus} setMedStatus={setMedStatus} ></MedicalHome>}></Route>
                <Route exact path='/pharmahome' element={<PharmaHome></PharmaHome>}></Route>

                <Route exact path='/addpatient' element={<AddPatientComponent currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddPatientComponent>}></Route>
                <Route exact path='/adddoctor' element={<AddDoctor currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddDoctor >}></Route>
                <Route exact path='/addmedical' element={<AddMedicalComponent currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddMedicalComponent>}></Route>
                <Route exact path='/addpharma' element={<AddPharma currentAccount={currentAccount} currentBalance={currentBalance} setCurrentBalanace={setCurrentBalanace}></AddPharma>}></Route>
              
                <Route exact path='/viewpatient' element={<ViewPatientComponent></ViewPatientComponent>}></Route>
                <Route exact path='/viewPharma' element={<ViewPharmaComponent></ViewPharmaComponent>}></Route>
                <Route exact path='/viewdoctor' element={<ViewDoctorComponent></ViewDoctorComponent>}></Route>
                <Route exact path='/viewmedical' element={<ViewMedicalComponent></ViewMedicalComponent>}></Route>
                <Route exact path='/viewonlypatient' element={<ViewOnlyPatient></ViewOnlyPatient>}></Route>

                <Route exact path='/admin' element={<AdminPanel></AdminPanel>}></Route>
         
              </Routes>
            </div>
          
              
              <FooterComponent></FooterComponent>
    
          </Router>
           
          :
          <Router>
              <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
              <>
                <Routes> 
                  <Route exact path='/' element={<ForceLogin></ForceLogin>}></Route>
                  <Route exact path='*' element={<ForceLogin></ForceLogin>}></Route>
                </Routes>
              </>
                <FooterComponent></FooterComponent>
              </Router>
            
        }
        </div>
         
  
  </>;
}

export default App;






