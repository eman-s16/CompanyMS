import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules

interface Employee {
  id: number;
  name: string;
  position: string;
  gender: string;
  description: string;
}
@Component({
  selector: 'app-hr-module',
  templateUrl: './hr-module.component.html',
  styleUrls: ['./hr-module.component.scss']
})
export class HrModuleComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      gender: 'Male',
      description: 'Experienced software engineer with a passion for coding.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      gender: 'Female',
      description: 'Dedicated product manager focused on delivering quality products.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'UI/UX Designer',
      gender: 'Male',
      description: 'Creative UI/UX designer with a keen eye for user-friendly interfaces.',
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'Marketing Specialist',
      gender: 'Female',
      description: 'Marketing guru skilled in branding and digital marketing strategies.',
    },
    {
      id: 5,
      name: 'Robert Brown',
      position: 'Data Analyst',
      gender: 'Male',
      description: 'Data enthusiast specializing in data analysis and visualization.',
    },
    {
      id: 6,
      name: 'Sarah White',
      position: 'HR Manager',
      gender: 'Female',
      description: 'Experienced HR manager ensuring a harmonious workplace environment.',
    },];

  editMode: boolean = false;


  selectedEmployee: Employee = {
    id: 0,
    name: '',
    position: '',
    gender: '',
    description: '',
  };
  showDialog: boolean = false;

  editEmployee(employee: Employee) {
    this.editMode = true;
    this.selectedEmployee = { ...employee };
    this.showDialog = true; 
  }

  createNewEmployee() {
    this.editMode = false;
    this.selectedEmployee = { id: 0, name: '', position: '', gender: '', description: '' };
    this.showDialog = true;
  }

  closeDialog() {
    this.editMode = false;
    this.selectedEmployee = { id: 0, name: '', position: '', gender: '', description: '' };
    this.showDialog = false;

  }
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      gender: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  showValidationMessage: boolean = false;
  saveEmployee() {
    if (this.employeeForm.valid) {
      if (this.editMode) {

        const index = this.employees.findIndex((e) => e.id === this.selectedEmployee.id);
        if (index !== -1) {

          this.employees[index] = { ...this.selectedEmployee };
        }
      } else {

        this.selectedEmployee.id = this.getNextEmployeeId();

        this.employees.push({ ...this.selectedEmployee });
      }

      this.closeDialog();
    } else {

      this.showValidationMessage = true; // Show validation message
    }
  }

  getNextEmployeeId(): number {

    const maxId = Math.max(...this.employees.map((e) => e.id), 0);
    return maxId + 1;
  }
  filterText: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
  get filteredAndSortedEmployees(): Employee[] {
    let filteredEmployees = this.employees.filter((employee) =>
      employee.name.toLowerCase().includes(this.filterText.toLowerCase())
    );

    if (this.sortDirection === 'asc') {
      filteredEmployees = filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filteredEmployees = filteredEmployees.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filteredEmployees;
  }

}

