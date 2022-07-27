import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  serial_number: string;
  id: string;
  name:string,
  email:string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = [
    'serial_number',
    'id',
    'name',
    'email',
    'action'
  ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  constructor() {
    const users : UserData[] = [
      <UserData>{
      serial_number: '1',
      id: '10',
      name:'Zain Zai',
      email:'iamzainzai@gmail.com'
      },
      <UserData>{
        serial_number: '2',
        id: '12',
        name:'Zain Zai',
        email:'iamzainzai@gmail.com'
      },
      <UserData>{
        serial_number: '3',
        id: '40',
        name:'Zain Zai',
        email:'iamzainzai@gmail.com'
      },
    ]
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

}
