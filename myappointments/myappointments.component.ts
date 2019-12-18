import { Component, OnInit } from '@angular/core';
import { UserregistrationService } from '../Service/userregistration.service';
import { MyappointmentService } from '../Service/myappointment.service';
import { ActivatedRoute } from '@angular/router';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.css']
})
export class MyappointmentsComponent implements OnInit {
  items: MenuItem[];
  public userInfo:any;
  public getAllAppointment:any;
  value:any
  public clickedcurrentstatus:Boolean = false;
  public clickedinduvidualList:Boolean = false;
  public  induvidualList :any;
  public norecord:Boolean = false;
  constructor(private profileService:UserregistrationService,private Service:MyappointmentService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      {label: 'Picked up'},
      {label: 'Washing'},
      {label: 'Way Back'},
      {label: 'Car Delivered'}
  ];
  
    var info = JSON.parse(sessionStorage.getItem('userinfo'));
    this.profileService.getUserById(info['userId']).subscribe(data=>{
      this.userInfo = data;
      this.Service.getAllAppointmentsbyUserid(this.userInfo['userId']).subscribe(data=>{
        console.log(data);
        var count=0;
        this.getAllAppointment = data;
        this.value = this.getAllAppointment['activeIndex'];
        this.getAllAppointment.filter(data=>{
          console.log(data['status']);
          if(data['status'] === 'In Progress'){
            count = count + 1;
          }
        })
        if(count === this.getAllAppointment.length){
           this.norecord = true;
        }else if(count === 0){
          this.norecord = false;
        }
    });
  });
    this.route.params.subscribe(data =>{
      console.log(data);
      if(data['current'] != null || data['current'] != undefined && data['current']==='true'){
        this.clickedcurrentstatus = true;
      }else{
        this.clickedcurrentstatus = false;
      }
    })
  }

a(index){
  this.clickedinduvidualList = true;
 // this.clickedcurrentstatus = undefined;
  this.induvidualList = this.getAllAppointment[index];
  console.log(this.getAllAppointment[index]);
}

}
