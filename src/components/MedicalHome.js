import {React,useEffect,} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { ethers } from 'ethers';
import Loader from './Loader';
import OurService from './OurService';

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


function MedicalHome(props) {

  const getstatusMed = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const MedicalContract= new ethers.Contract(MedicalContractAddress,abiMedicalContract, signer);
        let Txn = await MedicalContract.getStatus(account);
        let flag=String(Txn);
        
        console.log(String(Txn))
        if(flag==="0"){
          props.setMedStatus(true);
        }else{
         props.setMedStatus(false);
        }
        
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getstatusMed();
  }, [])

  return (
    <>
<Loader></Loader>
<OurService text={"Medical"}></OurService>

{props.MedStatus?<>
	<div class="alert alert-danger" role="alert">
		Your are Not Verified
		</div>
<div className="d-lg-flex align-items-lg-center">
      <div className="form-bg">
        <div className="form-container ">
	
            <img
            src={process.env.PUBLIC_URL + "/medical.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
        
            <form className="form-horizontal">
                <Link to="/addmedical" className="btn btn-default">
                Add Yourself and get Verified
                </Link>

            </form>
            </div>
      </div>
</div>
</>
:

<div className="d-lg-flex align-items-lg-center">

      <div className="form-bg">
        <div className="form-container ">
		<span class="badge badge-success">Verified</span>
            <img
            src={process.env.PUBLIC_URL + "/patient.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
        
            <form className="form-horizontal">
                <Link to="/viewonlypatient" className="btn btn-default">
                View Patient Medicine
                </Link>

            </form>
            </div>
      </div>
</div>

}


    </>
  )
}

export default MedicalHome