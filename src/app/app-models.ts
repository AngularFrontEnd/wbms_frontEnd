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

export interface Staff {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    usertype: string;
    email: string;
    address: string;
    contactNumber: string;
}


export interface CreateEmployee {
    firstName: string;
    lastName: string;
    middleInitial: string;
    email: string;
    contactNumber: string;
    address: string;
}

export interface CreateHousehold {
    firstName: string;
    lastName: string;
    middleInitial: string;
    email: string;
    contactNumber: string;
    address: string;
    city: string;
}
export interface Staff {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    usertype: string;
    email: string;
    address: string;
    contactNumber: string;
}


export interface meterReading {
    customer_id: number;
    meter_reading: number;
    reading_date: number;
}
export interface Setting {
    settingName: string;
    value: string;
}