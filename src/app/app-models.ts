export interface TransactionRecords {
    houseNo: number;
    customerName: string;
    waterConsumption: number;
    total_amount: number;
    rendered_amount: number;
}

export interface CreateTransaction {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    address: string;
}

export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    address: string;
}

export interface CreateEmployee {
    firstName: string;
    lastName: string;
    middleInitial: string;
    email: string;
    contactNumber: string;
    address: string;
}
