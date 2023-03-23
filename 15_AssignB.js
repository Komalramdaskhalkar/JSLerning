class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    
    }
}
const emp_anil = new Employee( 22,"Anil", "IT",50000,"TCS");
const emp_radha = new Employee( 33,"Radha", "HR", 74000,"Wipro");
const emp_rishi = new Employee( 55,"Rishi", "Finace",47000,"TCS");
const emp_sonali = new Employee( 22,"sonali", "Finace",45000,"Infy");
const emp_monika = new Employee( 22,"Monika", "IT",40000,"Wipro");
const emp_viny = new Employee( 22,"Vinayak", "IT",75000,"TCS");
const emp_mahi = new Employee( 22,"Mahesh", "HR",85000,"Infy");
const arrayEmployee=[emp_anil,emp_radha, emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("----------step 1 employee  working in TCS ---------");
arrayEmployee.forEach ((element) => {
    if (element.emp_company=="TCS"){
        console.log(`Emp_name:${element.emp_name},Emp company:${element.emp_company}`);

    }
});
console.log("------- step 2 employee salary greater than or equal to 50000");
arrayEmployee.forEach((element)=>{
    if(element.emp_salary>=50000){
        console.log(`Emp_id:${element.emp_id},Emp name:${element.emp_name},Emp dept:${element.emp_dept},Emp salary:${element.emp_salary},Emp compny:${element.emp_company}`
        )};
});
console.log("----------- step 3 sum of all employees salary--------- "); 
let sumofSalary =0;
arrayEmployee.forEach((element) =>{
    sumofSalary = sumofSalary +element.emp_salary;
});
console.log(`sum of all employee salary:${sumofSalary}`);
console.log("----------step 4 salary Average-----------------");
let sum=0;
let average;
arrayEmployee.forEach((element)=>{
    sum = sum + element.emp_salary;
    average = sum /arrayEmployee.length;
    });
    console.log(`Average of salary:${average}`);

    console.log("-------step 5 IT or HR Dept emp whose salary is greater than or equal to 75000----------");
    arrayEmployee.forEach((element)=>{
        if((element.emp_dept=="IT"||element.emp_dept=="HR") &&(element.emp_salary>=75000)){
            console.log(`Emp_id:${element.emp_id},Emp_name:${element.emp_name},Emp dept${element.emp_dept},Emp salary:${element.emp_salary}`);
        }
    }
    )