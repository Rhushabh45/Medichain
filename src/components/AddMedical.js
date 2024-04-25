import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useState } from 'react';
import Loader from './Loader';

const MedicalContractAddress="0xf95a98b5f91DfafAB0C7da866DB6e1174695b4Fa";
const abiMedicalContract=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Medicalid",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "MedicalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CertificateNumber",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addMedical",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMedical",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Medicalid",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "MedicalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CertificateNumber",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct MedicalContract.MedicalData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Medicalid",
				"type": "address"
			}
		],
		"name": "getMedical",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Medicalid",
				"type": "address"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Medicalid",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateMedicall",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


function AddMedicalComponent(props) {

  const [account, setAccount] = useState(null);
  const [phone, setPhone] = useState("");
  const [error, seterror] = useState("");


  const setPhonehandle = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    if (numericValue.length === 11) {
	  seterror("")
    } else {
		if(numericValue.length !== 11){
		setPhone(numericValue);
		seterror("Please enter 10 number.")
		}
    }
  };

  const setacc=async()=>{

    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setAccount(accounts[0]);
    //account = accounts[0];
 
  }

  
  const clear=()=>{
    document.getElementById("myForm").reset();
}

    const savedata = async () => {
        try {
          const { ethereum } = window;
    
          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const MedicalContract= new ethers.Contract(MedicalContractAddress, abiMedicalContract, signer);
  
  
            //datacapture
            const Medicalid=document.getElementById("pid").value;
          
            const MedicalName=document.getElementById("mname").value;
           
            const Address1=document.getElementById("address1").value;
            const Address2=document.getElementById("address2").value;
            const City=document.getElementById("city").value;
            const State=document.getElementById("state").value;
            const Zipcode=document.getElementById("zipcode").value;
    
            const phonenumber=document.getElementById("phonenumber").value;

            const CertificateNumber=document.getElementById("certificatenumber").value;
  
            //start          
            console.log("Initialize");
            const Address=Address1+" "+Address2+" "+City+" "+State+" "+Zipcode; 
    
            //console.log(Fullname)
            //console.log(idu)
            let Txn2 = await MedicalContract.addMedical(Medicalid,MedicalName,Address,phonenumber,CertificateNumber,0);
    
            
            console.log("Mining... please wait");
            await Txn2.wait();
    
            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
            
            //balance capture
           
            var elem = document.getElementById("alertid");
		  elem.classList.add("show");
		  setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);

          //
      clear();
  

               //
           

          } else {
            console.log("Ethereum object does not exist");
            var elem = document.getElementById("alertidf");
            elem.classList.add("show");
            setTimeout(function(){
              elem.classList.remove("show");
            }, 3000);
    
          }
    
        } catch (err) {
          console.log(err);
          var elem = document.getElementById("alertidf");
		elem.classList.add("show");
		setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);
    
        }
      }

      useEffect(() => {
        setacc();
      });
  


  

  return (
    <>
	<Loader></Loader>
    <div className="alert alert-info text-center" role="alert">
    Medical Information Add Panel
    </div>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>
        <div className="alert alert-danger" role="alert">
            Note : You will Spend ETH While Saving Data
            </div>
        <div className="alert alert-info" role="alert">
            Profile data
            </div>
          
        <div className="form-row ">

        <div className="col-lg-4 col-md-6 mb-3 ">
            <label htmlFor="validationCustom01">Medical ID</label>
            <input type="text" value={account} disabled className="form-control" id="pid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-3">
            <label htmlFor="validationCustom01">Medical name</label>
            <input type="text" className="form-control" id="mname"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>
           
        
           

            <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom02">Phone Number</label>
            <input type="number" className="form-control"  value={phone} onChange={setPhonehandle} id="phonenumber"  required/>
            <div className="valid-feedback">
			{error}
            </div>
            </div>

            
        </div>
        <div className="form-row">
        <div className="col-lg-6 form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="Flat , Wing , House Name"
          />
        </div>
        <div className="col-lg-6 form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Street , Area"
          />
        </div>
        </div>
        <div className="form-row">
            <div className="col-lg-2 col-md-6 mb-3">
            <label htmlFor="validationCustom03">City</label>
            <input type="text" className="form-control" id="city" required/>
            <div className="invalid-feedback">
                Please provide a valid city.
            </div>
            </div>
            
            <div className="col-lg-2 col-md-3 mb-3">
            <label htmlFor="validationCustom04">State</label>
            <input type="text" className="form-control" id="state" required/>
            <div className="invalid-feedback">
                Please select a valid state.
            </div>
            </div>
            <div className="col-lg-2 col-md-3 mb-3">
            <label htmlFor="validationCustom05">Zip</label>
            <input type="text" className="form-control" id="zipcode" required/>
            <div className="invalid-feedback">
                Please provide a valid zip.
            </div>
            </div>
        </div>
        <div className="alert alert-info" role="alert">
            Medical data
        </div>

        
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">licence number </label>
    <textarea className="form-control" id="certificatenumber" rows="3"></textarea>
  </div>
  


     
        
        </form>
        <div className='container'>
        <button onClick={savedata} className="btn bt2 btn-success mb-5">Save</button>
      
        <button onClick={clear} className="btn bt1 btn-danger">
        Clear
      </button>
</div>
    </div>
    </>
  )
}

export default AddMedicalComponent

