//export const address='0xa3f65d7001d2818db7903216b978d3467d252c39'
export const address=  '0xcd6a91d7902fb57b7f72042aacc86c41825ecb64'
export const ABI=
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_shopName",
				"type": "string"
			},
			{
				"name": "_ownerName",
				"type": "bytes32"
			}
		],
		"name": "createMerchant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "govDepartmentNames",
				"type": "string[]"
			},
			{
				"name": "budgets",
				"type": "uint256[]"
			}
		],
		"name": "initGov",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_departmentName",
				"type": "string"
			},
			{
				"name": "_shopName",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "bytes32"
			},
			{
				"name": "_fee",
				"type": "uint256"
			},
			{
				"name": "_headName",
				"type": "bytes32"
			}
		],
		"name": "makeTransaction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nominateName",
				"type": "bytes32"
			},
			{
				"name": "_departmentName",
				"type": "string"
			}
		],
		"name": "nominate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "bytes32"
			}
		],
		"name": "reportTransaction",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "centralGov",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_departmentName",
				"type": "string"
			}
		],
		"name": "getGovDepartmentByName",
		"outputs": [
			{
				"components": [
					{
						"name": "departmentName",
						"type": "string"
					},
					{
						"name": "budget",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_departmentName",
				"type": "string"
			}
		],
		"name": "getHeadByDepartmentName",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "bytes32"
					},
					{
						"components": [
							{
								"name": "departmentName",
								"type": "string"
							},
							{
								"name": "budget",
								"type": "uint256"
							}
						],
						"name": "department",
						"type": "tuple"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_shopName",
				"type": "string"
			}
		],
		"name": "getMerchantByName",
		"outputs": [
			{
				"components": [
					{
						"name": "shopName",
						"type": "string"
					},
					{
						"name": "ownerName",
						"type": "bytes32"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_name",
				"type": "bytes32"
			}
		],
		"name": "getTransactionByName",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"name": "departmentName",
								"type": "string"
							},
							{
								"name": "budget",
								"type": "uint256"
							}
						],
						"name": "department",
						"type": "tuple"
					},
					{
						"name": "name",
						"type": "bytes32"
					},
					{
						"name": "fee",
						"type": "uint256"
					},
					{
						"components": [
							{
								"name": "shopName",
								"type": "string"
							},
							{
								"name": "ownerName",
								"type": "bytes32"
							}
						],
						"name": "merchant",
						"type": "tuple"
					},
					{
						"name": "reportTimes",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "govDepartmentHeads",
		"outputs": [
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"components": [
					{
						"name": "departmentName",
						"type": "string"
					},
					{
						"name": "budget",
						"type": "uint256"
					}
				],
				"name": "department",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "govDepartments",
		"outputs": [
			{
				"name": "departmentName",
				"type": "string"
			},
			{
				"name": "budget",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "merchants",
		"outputs": [
			{
				"name": "shopName",
				"type": "string"
			},
			{
				"name": "ownerName",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactions",
		"outputs": [
			{
				"components": [
					{
						"name": "departmentName",
						"type": "string"
					},
					{
						"name": "budget",
						"type": "uint256"
					}
				],
				"name": "department",
				"type": "tuple"
			},
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"components": [
					{
						"name": "shopName",
						"type": "string"
					},
					{
						"name": "ownerName",
						"type": "bytes32"
					}
				],
				"name": "merchant",
				"type": "tuple"
			},
			{
				"name": "reportTimes",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]