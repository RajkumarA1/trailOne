import { LightningElement,track } from 'lwc';

import Nme_FIELD from '@salesforce/schema/Account.Name';
import PHE_FIELD from '@salesforce/schema/Account.Phone';
import WEB_FIELD from '@salesforce/schema/Account.Website';
import RAT_FIELD from '@salesforce/schema/Account.Rating';
import IND_FIELD from '@salesforce/schema/Account.Industry';

export default class RecordForm extends LightningElement {

@track recordId;
fieldsArray=[Nme_FIELD,PHE_FIELD,WEB_FIELD,RAT_FIELD,IND_FIELD];

handleSuccess(event){
    this.recordId=event.detail.id;
}
}