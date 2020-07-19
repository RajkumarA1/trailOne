public with sharing class accountManager {
    @AuraEnabled
    public static list<account> getRecords(integer noOfRecords){
         return [Select id,name,Phone from account Limit:noOfRecords ];        
    } 
}
