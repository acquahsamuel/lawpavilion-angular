import { Component, OnInit } from '@angular/core';


export interface PatientDetails {
  name: string;
  profileImage?: string;
  gender: string;
  age: number;
  phoneNumber: number;
  address: string
}


const ELEMENT_DATA: PatientDetails[] = [
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'M', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'M', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'M', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'M', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'M', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'M', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },
  { profileImage: 'assets/images/placeholder.png', name: "Samuel", gender: 'F', age: 20, phoneNumber: 293302323, address: 'Hello Connect' },

];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['profileImage', 'name', 'gender', 'age', 'phoneNumber', 'address'];
  dataSource = ELEMENT_DATA;

}

