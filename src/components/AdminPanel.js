import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useState } from 'react';
import { PharmaAddress } from './ABI_ADDRESS';
import Loader from './Loader';

const DoctorContractAddress="0xCaEe5f85bE94B4858D756717a82F44985B1A61De";
const abiDoctorContract=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Doctorid",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "HospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "DoctorName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Speciality",
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
				"internalType": "string",
				"name": "HospitalID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Doctorid",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "HospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "DoctorName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Speciality",
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
						"internalType": "string",
						"name": "HospitalID",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct DoctorContract.DoctorData[]",
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
				"name": "Doctorid",
				"type": "address"
			}
		],
		"name": "getDoctor",
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
				"name": "Doctorid",
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
				"name": "Doctorid",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

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

const PharmaContractAddress="0xC9D83763776c578C0d76bd0CbCd00f06036f612F";
const abiPharmaContract=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "UpdateMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "CompanyID",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "CompanyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ExpireDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ManufactureDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Contents",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ApprovalFrom",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addMedicine",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllPharma",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "MedicineBatchId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "CompanyID",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "CompanyName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ExpireDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ManufactureDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Contents",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ApprovalFrom",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct PharmaContract.PharmaData[]",
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
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
			}
		],
		"name": "getMedicine",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
				"internalType": "uint256",
				"name": "MedicineBatchId",
				"type": "uint256"
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
	}
];

var arraylist=[];
var whole=[];

var arraylist2=[];
var whole2=[];

var arraylist3=[];
var whole3=[];





function AdminPanel() {

	const [w1,setw1] = useState([]);
	const [w2,setw2] = useState([]);
	const [w3,setw3] = useState([]);

    const clear=()=>{
        document.getElementById("myForm").reset();
    }


    const Update = async () => {
        try {
			
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                const PharmaContract= new ethers.Contract(PharmaContractAddress, abiPharmaContract, signer);
				const DoctorContract= new ethers.Contract(DoctorContractAddress, abiDoctorContract, signer);
				const MedicalContract= new ethers.Contract(MedicalContractAddress, abiMedicalContract, signer);

                const id=document.getElementById("id").value;
                const status=document.getElementById("status").value;
                const entity=document.getElementById("entity").value;

				if(entity=="doctor"){
					let Txn2 = await DoctorContract.updateDoctor(id,status);
					console.log("Mining... please wait");
					await Txn2.wait();
					console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
				}

				if(entity=="medical"){
					let Txn2 = await MedicalContract.updateMedicall(id,status);
					console.log("Mining... please wait");
					await Txn2.wait();
					console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
				}

				if(entity=="medicine"){
					let Txn2 = await PharmaContract.UpdateMedicine(id,status);
					console.log("Mining... please wait");
					await Txn2.wait();
					console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${Txn2.hash}`);
				}
                




  
                var elem = document.getElementById("alertid");
                elem.classList.add("show");
                setTimeout(function(){
                elem.classList.remove("show");
                }, 3000);
      clear();
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

    async function getAllMedicine() {
		try {
		  const { ethereum } = window;
	  
		  if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();

            //pharma
			
			const PharmaContract = new ethers.Contract(PharmaContractAddress,abiPharmaContract,signer);
			arraylist = await PharmaContract.getAllPharma();
			console.log(arraylist)
			for(var i=0;i<arraylist.length;i++){
				whole[i]=arraylist[i];
			}
			setw1(whole);
			
			

            //doctor
			console.log(2)
            const DoctorContract = new ethers.Contract(DoctorContractAddress,abiDoctorContract,signer);
			arraylist2 = await DoctorContract.getAllDoctor();
			console.log(arraylist2)
			for(var i=0;i<arraylist2.length;i++){
				whole2[i]=arraylist2[i];
			}
			setw2(whole2);

             //Medical
			 console.log(3)
             const MedicalContract = new ethers.Contract(MedicalContractAddress,abiMedicalContract,signer);
             arraylist3 = await MedicalContract.getAllMedical();
			 console.log(arraylist3)
             for(var i=0;i<arraylist3.length;i++){
                 whole3[i]=arraylist3[i];
             }
			 setw3(whole3);



		  }
		} catch (error) {
		  console.error(error);
		}
	  }

      const changeable=(status)=>{
       console.log(status)
       var r="";
        if(status=="1"){
        r="Verified";
        }
        else{
        r="Not Verified";
        }
        return r
      }

      useEffect(() => {
		getAllMedicine();
	  }, [])

  return (
    <>
	<Loader></Loader>
   <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>

        <div className="alert alert-info" role="alert">
            Update And Verify Members and Data
            </div>
           
        <div className="form-row">

        <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">ID</label>
            <input type="text" className="form-control" id="id"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>

        <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">Type Of Entity</label>
            <select className="custom-select form-control p-1 pl-4" id="entity" required>
              <option>Select</option>
              <option value="doctor">Doctor</option>
              <option value="medical">Medical</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>

        <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom04">Status</label>
            <select className="custom-select form-control p-1 pl-4" id="status" required>
              <option>Select</option>
              <option value="0">Not Verified</option>
              <option value="1">Verified</option>
            </select>
          </div>

        </div>
        </form>
        <div style={{width:"100px"}}>
        <button onClick={Update} className="btn bt2 btn-success mb-5">Update</button>

        <button onClick={clear} className="btn bt1 btn-danger">
        Clear
      </button>
    </div>
    </div>


    <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
      {w1.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
              <th>Medicine Batch ID</th>
              <th>Company ID</th>
              <th>Company Name</th>
              <th>Address</th>
              <th>Expire Date</th>
              <th>Manufacture Date</th>
              <th>Contents</th>
              <th>Approval From</th>
              <th>Status</th>
            
            </tr>
          </thead>
          <tbody>
            {w1.map((record, index) => (
              <tr key={index}>
                <td>{String(record[0])}</td>
                <td>{String(record[1])}</td>
                <td>{String(record[2])}</td>
                <td>{String(record[3])}</td>
                <td>{String(record[4])}</td>
                <td>{String(record[5])}</td>
                <td>{String(record[6])}</td>
                <td>{String(record[7])}</td>
                <td id='s'>{changeable(String(record[8]))}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>


    <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
      {w2.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
            <th scope="col">Doctor ID</th>
            <th scope="col">Hospital Name</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Address</th>
            <th scope="col">Speciality</th>
            <th scope="col">Phone Number</th>
            <th scope="col">License Number</th>
            <th scope="col">Hospital ID</th>
            <th scope="col">Status</th>
            
            </tr>
          </thead>
          <tbody>
            {w2.map((record, index) => (
              <tr key={index}>
                <td>{String(record[0])}</td>
                <td>{String(record[1])}</td>
                <td>{String(record[2])}</td>
                <td>{String(record[3])}</td>
                <td>{String(record[4])}</td>
                <td>{String(record[5])}</td>
                <td>{String(record[6])}</td>
                <td>{String(record[7])}</td>
                <td id='s'>{changeable(String(record[8]))}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>


    <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
      {w3.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
			<th scope="col">Medical ID</th>
			<th scope="col">Medical Name</th>
			<th scope="col">Address</th>
			<th scope="col">Phone Number</th>
			<th scope="col">License Number</th>
			<th scope="col">Status</th>
            
            </tr>
          </thead>
          <tbody>
            {w3.map((record, index) => (
              <tr key={index}>
                <td>{String(record[0])}</td>
                <td>{String(record[1])}</td>
                <td>{String(record[2])}</td>
                <td>{String(record[3])}</td>
                <td>{String(record[4])}</td>
                <td id='s'>{changeable(String(record[5]))}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>



    
    </>
  )
}

export default AdminPanel