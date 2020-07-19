import { LightningElement,wire,track } from 'lwc';
import getAccRecords from '@salesforce/apex/accountManager.getRecords'
export default class WiringApexMethod extends LightningElement {

     // @wire(getAccRecords) accounts;

      @track noOfRecords;
      @track accounts;

      noOfAccountsChangeHandler(event){
        this.noOfRecords = event.target.value;
      } 
      getAccounts(){
        getAccRecords({noOfRecords:this.noOfRecords}).then(Response =>{

            this.accounts=Response;
            console.log(Response);
        }).catch(error=>{
            console.error('error in getting the records',error.body.message);
        })
      }

    
}