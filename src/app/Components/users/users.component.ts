import {Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { user } from '../../Models/User.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { UsersEffect } from '../../Store/Effects/Users.Effect';
import { Store } from '@ngrx/store';
import { StartCallApiClass } from '../../Store/Actions/Users.Action';
import { AllData } from '../../Models/Data.model';
import { SelectionModel } from '@angular/cdk/collections';
import { RouterModule } from '@angular/router';
import { RowsDirective } from '../../Directives/rows.directive';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    RouterModule,
    RowsDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush ,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  
  constructor(private usereff:UsersEffect,private store:Store){}

  per_Page=0;
  ALLDATA:AllData =  {} as AllData;
  Users:user[] = [];
  selection = new SelectionModel<user>(true, []);

  dataSource = new MatTableDataSource<user>();
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'avatar'];
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.usereff.effectUser$.subscribe({
      next:(All)=>{
          this.ALLDATA = All.payload;
          this.Users = this.ALLDATA.data;
          this.per_Page = this.ALLDATA.per_page;
          this.dataSource = new MatTableDataSource<user>(this.Users);
          this.paginator._changePageSize(3);
          this.dataSource.paginator = this.paginator;
      },
      error:(error)=>{console.log(error)},
      complete:()=>{}
    })
    this.store.dispatch(new StartCallApiClass)
  }

}
