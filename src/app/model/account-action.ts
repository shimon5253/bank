export enum account_action_type {Input = "input" ,Output = "Output" ,Loan = "Loan"}



export class AccountAction {
    id:number;
    AccountId:number;
    Type: account_action_type;
    Amount:number;
}
