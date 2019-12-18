import { Component, OnInit } from '@angular/core';
import { UserregistrationService } from '../Service/userregistration.service';
import { MyappointmentService } from '../Service/myappointment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.css']
})
export class MyappointmentsComponent implements OnInit {
  
  public userInfo:any;
  public getAllAppointment:any;
  public clickedcurrentstatus:Boolean = false;
  public clickedinduvidualList:Boolean = false;
  public  induvidualList :any;
  constructor(private profileService:UserregistrationService,private Service:MyappointmentService,private route:ActivatedRoute) { }

  ngOnInit() {
   
    var info = JSON.parse(sessionStorage.getItem('userinfo'));
    this.profileService.getUserById(info['userId']).subscribe(data=>{
      this.userInfo = data;
      this.Service.getAllAppointmentsbyUserid(this.userInfo['userId']).subscribe(data=>{
        console.log(data);
        this.getAllAppointment = data;
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
