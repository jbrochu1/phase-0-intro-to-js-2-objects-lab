const employee = {
    name: "Jim", 
    streetAddress: "2228 Blake St #100, Denver, CO 80205",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const UpdEmp = {...employee};
    UpdEmp[key] = value;
    employee = {...employee, ...UpdEmp};
    return employee;
    return UpdEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const delKey = {...employee};
    delete delKey[key];
    return delKey;
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}