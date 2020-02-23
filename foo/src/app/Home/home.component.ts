import { Component, OnInit, Type } from '@angular/core';
// import { APIResponse } from 'src/core/models/api.response.model';
import {Form} from '@angular/forms';
import { Validators, FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';
import {Detail, BreedName, CityName} from 'src/app/Home/home.model';
import{ServiceService} from 'src/app/Services/service.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routes: any = [];
  route = this.routes;
  searchForm:FormGroup;
  routeName: string = "selectedRoute";
  showExpanded: boolean = false;
  Detail:Detail;
  BreedName: any;
  Type:any;
  CityName: any;
 details: object;
  det: any;
  breedsexist: any;
  message: any;

  constructor(private service:ServiceService, private formBuilder: FormBuilder) { }
 
  ngOnInit(){
    this.searchForm=this.formBuilder.group({
      cities:new FormControl('',[Validators.required]),
      Ages:new FormControl('',[Validators.required]),
      breeds:new FormControl('',[Validators.required])
    })
    this.service.Getbreed().subscribe(result=>{
      this.BreedName = result
      console.log(result);
    });

    this.service.GetAgeGroup().subscribe(result=>{
      this.Type= result;
      console.log(result);
    });
    this.service.GetLocation().subscribe(result=>{
      this.CityName= result;
      console.log(result);
    });

    this.service.GetAll().subscribe(result=>{
      this.det = result;
      this.breedsexist= this.det.breeds;
      

    });
   
  

}

GetDetail(searchForm){

  this.service.GetDetail(searchForm.controls.cities.value,searchForm.controls.Ages.value,searchForm.controls.breeds.value).subscribe(data=>{
    
    if(data!=0)
    {
      this.details = data;
    }
  });
}
}
