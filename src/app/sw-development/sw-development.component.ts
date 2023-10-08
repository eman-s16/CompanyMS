import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  createdDate: string;
  creator: string;
  progress: number;
}
export interface TableData {
  owner: string;
  milestone: string;
  work: string;
  duration: string;
  priority: string;
}
@Component({
  selector: 'app-sw-development',
  templateUrl: './sw-development.component.html',
  styleUrls: ['./sw-development.component.scss']
})
export class SwDevelopmentComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'New Admin Design',
      category: 'Web Design',
      description: 'Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!',
      createdDate: '09 Jun 2019 11:32AM',
      creator: 'Nathan Guerrero',
      progress: 15
    },
    {
      id: 2,
      title: 'Mobile App Development',
      category: 'Mobile App',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna in dolor eleifend consequat.',
      createdDate: '15 Sep 2020 02:45PM',
      creator: 'Sarah Johnson',
      progress: 25
    },
    {
      id: 3,
      title: 'E-commerce Website',
      category: 'Web Development',
      description: 'Suspendisse potenti. In in elit sit amet urna congue lacinia. Vivamus posuere quam id justo eleifend.',
      createdDate: '30 Mar 2021 09:15AM',
      creator: 'David Smith',
      progress: 50
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      category: 'Data Science',
      description: 'This project involves creating an interactive dashboard for data analytics and visualization.',
      createdDate: '10 Nov 2021 03:30PM',
      creator: 'Ella Williams',
      progress: 80
    },
    {
      id: 5,
      title: 'Mobile Game Development',
      category: 'Game Development',
      description: 'Developing a mobile game with advanced graphics and gameplay mechanics.',
      createdDate: '25 Dec 2021 10:00AM',
      creator: 'Michael Brown',
      progress: 70
    },
    {
      id: 6,
      title: 'AI Chatbot Integration',
      category: 'Artificial Intelligence',
      description: 'Integrating an AI chatbot into the website for enhanced customer support and engagement.',
      createdDate: '18 Feb 2022 01:20PM',
      creator: 'Sophia Anderson',
      progress: 90
    },

  ];
  tableData: TableData[] = [
    {
      owner: 'Isidore Dilao',
      milestone: 'Account receivable',
      work: '30:00',
      duration: '30:0 hrs',
      priority: 'Medium',
    },
    {
      owner: 'Maricel Villalon',
      milestone: 'Account receivable',
      work: '68:00',
      duration: '105:0 hrs',
      priority: 'High',
    },
    {
      owner: 'Theresa Wright',
      milestone: 'Approval site',
      work: '74:00',
      duration: '89:0 hrs',
      priority: 'None',
    },
    {
      owner: 'Jason Porter',
      milestone: 'Final touch up',
      work: '30:00',
      duration: '30:0 hrs',
      priority: 'None',
    },
    {
      owner: 'Annelyn Mercado',
      milestone: 'Account receivable',
      work: '30:00',
      duration: '30:0 hrs',
      priority: 'None',
    },
    {
      owner: 'Sean Black',
      milestone: 'Basement slab preparation',
      work: '88:00',
      duration: '88:0 hrs',
      priority: 'None',
    },
    {
      owner: 'Scott Ortega',
      milestone: 'Account receivable',
      work: '56:00',
      duration: '125:0 hrs',
      priority: 'Medium',
    },
    {
      owner: 'David Wallace',
      milestone: 'Account receivable',
      work: '30:00',
      duration: '30:0 hrs',
      priority: 'None',
    },
  ];
  filteredProjects: Project[] = [];

  searchTerm: string = '';

  constructor(private fb: FormBuilder) {

    this.filteredProjects = this.projects;
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      createdDate: [''],
      creator: [''],
      progress: [0],
    });
  }


  filterProjects() {
    this.filteredProjects = this.projects.filter((project) =>
      project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  showDialog = false;
  projectForm: FormGroup;



  openDialog() {
    this.projectForm.reset();
    this.showDialog = true;
  }

  saveProject() {
    if (this.projectForm.valid) {

      const newProject: Project = {
        id: this.getNextProjectId(),
        ...this.projectForm.value,
      };


      this.projects.push(newProject);

      this.closeDialog();
    } else {
      // Handle validation errors if necessary
    }
  }

  closeDialog() {
    this.showDialog = false;
  }

  getNextProjectId(): number {

    const maxId = this.projects.reduce((max, project) => (project.id > max ? project.id : max), 0);
    return maxId + 1;
  }
}
