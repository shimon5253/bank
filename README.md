# NgBank

# Git Actions
* clone repo 
    * `git clone <reourl>`  
    * `dir`  
    * `cd <dirname>`  
    * `npm install`  
* update form cloud - `git pull`  
* push into cloud repo 
    * `git add .`  
    * `git commit -m "comment"`  
    * `git push -u origin master`  

# SPEC

## Entities

### BankUser

User Properties:
* id
* FirstName
* LastName
* UserName
* Password

### Account

Account Properties:
* id
* BankUserId
* Name
* Balance

### AccountAction

AccountAction Properties:
* id
* AccountId
* Type `Input/Output/Loan`
* Amount 


## DataSource

We will save the data as local files in out repo's unde `assets`.  
We will create a module that will enable to save easily.  
At git push data will be saved to the could (github).  

## App Flow

### Login Page

User inputs user and pass, otherwise can't get into private area.  

### Register Page

New User Form

### Summary Page

List 30 last AccountAction in Account.  

### AccountAction Page

Make AccountAction from enum.  
Dont forget to log.  