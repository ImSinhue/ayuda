import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent {
  candidates = [
    {
      name: 'Henry Walker',
      email: 'henry.walker@mail.co',
      network: 'Linkedin',
      metric: '270 connections',
      avatar: 'https://i.pravatar.cc/150?img=1',
      smtp: true,
      color: 'bg-yellow-100'
    },
    {
      name: 'Cheisea Nguyen',
      email: 'chnguyen@mailee.com',
      network: 'Instagram',
      metric: '3.1k followers',
      avatar: 'https://i.pravatar.cc/150?img=2',
      smtp: true,
      color: 'bg-orange-100'
    },
    {
      name: 'Aaron Carter',
      email: 'aaron@mailga.com',
      network: 'Instagram',
      metric: '1.3k followers',
      avatar: 'https://i.pravatar.cc/150?img=3',
      smtp: true,
      color: 'bg-blue-100'
    }
  ];
}
