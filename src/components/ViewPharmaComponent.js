import React from 'react'
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useState } from 'react';
import Loader from './Loader';

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

function ViewPharmaComponent(props) {

	

	const clear=()=>{
		document.getElementById("myForm").reset();
	}
	
    const search = async () => {
        try {
          const { ethereum } = window;

          if (ethereum) {
  
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const PharmaContract= new ethers.Contract(PharmaContractAddress, abiPharmaContract, signer);
            //datacapture
            const medicinebatchid=document.getElementById("mbid").value;
        
            //start 
    
            console.log("Initialize");

           
            const Txn2 = await PharmaContract.getMedicine(medicinebatchid);
            console.log(Txn2);

       

            document.getElementById("cid").innerHTML=Txn2[0];
            document.getElementById("cname").innerHTML=Txn2[1];
			document.getElementById("address").innerHTML=Txn2[2];
			document.getElementById("eid").innerHTML=Txn2[3];
			document.getElementById("maid").innerHTML=Txn2[4];
            document.getElementById("contents").innerHTML=Txn2[5];
            document.getElementById("ApprovalForm").innerHTML=Txn2[6];
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
    Pharma(Medicines) Information Search Panel
    </div>

    <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>

        <div className="alert alert-info" role="alert">
            Enter ID to Search
            </div>
            <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01">Medicine Batch ID</label>
            <input type="text" className="form-control" id="mbid"  required/>
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

<div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
<table className="table table-bordered">
    <thead className="thead-dark">
        <tr>
        <th scope="col">CompanyID</th>
        <th scope="col">CompanyName</th>
		<th scope="col">Address</th>
        <th scope="col">ExpireDate</th>
		<th scope="col">ManufactureDate</th>
        <th scope="col">Contents</th>
        <th scope="col">ApprovalFrom</th>
		<th scope="col">Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td id="cid"></td>
        <td id="cname"></td>
        <td id="address"></td>
        <td id="eid"></td>
		<td id="maid"></td>
        <td id="contents"></td>
        <td id="ApprovalForm"></td>
		<td id="status"></td>
        </tr>

    </tbody>
    </table>
</div>
</>
  )
}

export default ViewPharmaComponent