import React from 'react'
import { ethers } from 'ethers';
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

function ViewDoctorComponent(props) {


	const clear=()=>{
		document.getElementById("myForm").reset();
	}
	
    const search = async () => {
        try {
          const { ethereum } = window;

          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const DoctorContract= new ethers.Contract(DoctorContractAddress, abiDoctorContract, signer);
            //datacapture
            const doctorid=document.getElementById("doctorid").value;
		
        
            //start 
    
            console.log("Initialize");

           
            const Txn2 = await DoctorContract.getDoctor(doctorid);
            console.log(Txn2);

            document.getElementById("hname").innerHTML=Txn2[0];
            document.getElementById("dname").innerHTML=Txn2[1];
			document.getElementById("address").innerHTML=Txn2[2];
			document.getElementById("speciality").innerHTML=Txn2[3];
            document.getElementById("phonenumber").innerHTML=Txn2[4];
            document.getElementById("lno").innerHTML=Txn2[5];
            document.getElementById("hid").innerHTML=Txn2[6];
			if(Txn2[7]=="1"){
				document.getElementById("status").innerHTML="Verified";
				document.getElementById("status").style.backgroundColor="green";
			}
			else{
				document.getElementById("status").innerHTML="Not Verified";
				document.getElementById("status").style.backgroundColor="red";
			}
			
           
    
            console.log("Mining... please wait");

           // console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${Txn2.hash}`);
            
            //balance capture
        
        var elem = document.getElementById("alertid");
		  elem.classList.add("show");
		  setTimeout(function(){
			elem.classList.remove("show");
		  }, 3000);
		  
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

  return (
      <>
	  <Loader></Loader>
	<div className="alert alert-info text-center" role="alert">
    Doctor and Related Hospital Information Search Panel
    </div>

    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>

        <div className="alert alert-info" role="alert">
            Enter ID to Search
            </div>
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">Doctor ID</label>
            <input type="text" className="form-control" id="doctorid"  required/>
            <div className="valid-feedback">
                Looks good!
            </div>
            </div>

        </form>
		<div className='container'>
        <button onClick={search} className="btn btn-primary">Search</button>
		<button onClick={clear} className="btn btn-danger ml-4">
		
        Clear
      </button>
	  </div>
        
        


    </div>

<div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
<table className="table table-bordered">
    <thead className="thead-dark">
        <tr>

  
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
        <tr>
        <td id="hname"></td>
        <td id="dname"></td>
        <td id="address"></td>
        <td id="speciality"></td>
        <td id="phonenumber"></td>
        <td id="lno"></td>
        <td id="hid"></td>
		<td id="status"></td>
        </tr>

    </tbody>
    </table>

</div>
</>
  )
}

export default ViewDoctorComponent