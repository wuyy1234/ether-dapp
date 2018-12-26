pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract myContract{
     
    struct Citizen{
        Transaction[] reports;
        //can report a gov transaction
        //can supervise all gov transaction
    }
    
    mapping (address=>Citizen)  citizens;
    
    struct GovDepartment{
        string departmentName;
        uint budget;
    }
    struct GovDepartmentHead{
        //resposible for a transaction
        bytes32 name;
        GovDepartment department;
    }
    
   

    struct Transaction{
        //gov department
        GovDepartment department;
        //transaction name
        bytes32 name;
        //transation fee
        uint fee;
        //merchants
        Merchant merchant;
        //store being reported times
        uint reportTimes;
    }

    address public  centralGov;
    Transaction[] public transactions;
    GovDepartment[] public govDepartments;
    GovDepartmentHead[] public govDepartmentHeads;
    Merchant[] public merchants;

    struct Merchant{
        //shop name
        string shopName;
        //owner name
        bytes32 ownerName;

    }

    

    function createMerchant( string memory _shopName,bytes32 _ownerName)public{
        //check shop name is valid or not
        bool isValid = true;
        for(uint i = 0;i<merchants.length;i++){
            if(keccak256(abi.encodePacked( merchants[i].shopName))
            ==keccak256(abi.encodePacked(_shopName))){
                isValid = false;
            }
        }
        require(
            isValid,
            "shopName already exist,creat failed"
        );

        merchants.push(Merchant({
            shopName:_shopName,
            ownerName:_ownerName
        }));

    }


    function initGov(string[] memory govDepartmentNames,
    uint[] memory budgets) public{
        //central gov construct
        require(
            govDepartmentNames.length==budgets.length,
            "govDepartmentNames.length!=budgets.length"
        );

        
        for(uint i = 0;i<govDepartmentNames.length;i++){
            govDepartments.push(GovDepartment({
                departmentName:govDepartmentNames[i],
                budget:budgets[i]
            }));
        }

    }
    function nominate(bytes32  nominateName,string memory  _departmentName)public {
        
        GovDepartment memory nominateDepartment = getGovDepartmentByName(_departmentName);
        
        require(
            msg.sender==centralGov,
            "only centralGov can nominate"
        );
        govDepartmentHeads.push(GovDepartmentHead({
            name:nominateName,
            department:nominateDepartment
        }));
    }


    function makeTransaction(string memory _departmentName,string memory _shopName, 
    bytes32 _name,uint _fee,bytes32 _headName
    )public{
        GovDepartment memory _govDepartment = getGovDepartmentByName(_departmentName);
        Merchant memory _merchant = getMerchantByName(_shopName);
        //check if the _headName is true
        bool isHeadNameValid = false;
        uint govPos=0;
        for(uint i = 0;i<govDepartmentHeads.length;i++){
            if(govDepartmentHeads[i].name==_headName){
                isHeadNameValid = true;
                govPos = i;
            }
        }
        require( isHeadNameValid,"headName invalid");
        require(
            govDepartments[govPos].budget>_fee,"budget not enough to cover transaction fee"
        );
        govDepartments[govPos].budget = govDepartments[govPos].budget-_fee;
        transactions.push(Transaction({
            department:_govDepartment,
            name:_name,
            fee:_fee,
            merchant:_merchant,
            reportTimes:0
        }));
    }

    function reportTransaction (bytes32 _name)
    public  {

        Transaction memory _transation = getTransactionByName( _name );
        //check transaction isValid
        bool isValid = false;
        for(uint i = 0;i<transactions.length;i++){
            if(transactions[i].name==_transation.name){
                isValid = true;
                transactions[i].reportTimes++;
            }
        }
        require(
            isValid,
            "reportTransaction name invalid"
        );
    }
    
    function getHeadByDepartmentName(string memory _departmentName) public 
    view returns ( GovDepartmentHead memory){
        bool isValid = false;
        uint pos = 0;
        for(uint i = 0;i<govDepartmentHeads.length;i++){
            if(keccak256(abi.encodePacked(govDepartmentHeads[i].department.departmentName))==
            keccak256(abi.encodePacked(_departmentName))){
                isValid = true;
                pos = i;
            }
        }
        require(
            isValid,
            "getGovDepartmentByName error"
        );
        
        return govDepartmentHeads[pos];
        
    }

    function getGovDepartmentByName(string memory _departmentName)public 
    view returns( GovDepartment memory){
        bool isValid = false;
        uint pos = 0;
        for(uint i = 0;i<govDepartments.length;i++){
            if(keccak256(abi.encodePacked(govDepartments[i].departmentName))==
            keccak256(abi.encodePacked(_departmentName))){
                isValid = true;
                pos = i;
            }
        }
        require(
            isValid,
            "getGovDepartmentByName error"
        );
        
        return govDepartments[pos];


    }

    function getTransactionByName(bytes32 _name) public view returns (Transaction memory){
        bool isValid = false;
        uint pos = 0;
        for(uint i = 0;i<transactions.length;i++){
            if(transactions[i].name==_name){
                isValid = true;
                pos = i;
            }
        }
        require(
            isValid,
            "getTransactionByName error"
        );
        
        return transactions[pos];
    }
    
    function getMerchantByName(string memory _shopName) public view returns (Merchant memory){
        bool isValid = false;
        uint pos = 0;
        for(uint i = 0;i<merchants.length;i++){
            if(keccak256(abi.encodePacked(merchants[i].shopName))==keccak256(abi.encodePacked(_shopName)) ){
                isValid = true;
                pos = i;
            }
        }
        require(
            isValid,
            "getMerchantByName error"
        );
        
        return merchants[pos];

    }
    



}
