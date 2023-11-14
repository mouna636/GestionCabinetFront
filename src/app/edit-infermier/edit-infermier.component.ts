import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfirmierService } from '../services/infirmier.service';

@Component({
  selector: 'app-edit-infermier',
  templateUrl: './edit-infermier.component.html',
  styleUrls: ['./edit-infermier.component.css']
})
export class EditInfermierComponent implements OnInit {

editInfirmierForm:any;
id:any;
infirmier:any={};

constructor(private activateRoute: ActivatedRoute, private formBuilder: FormBuilder, private infirmierService: InfirmierService, private router: Router) { }

ngOnInit() {
  this.id = this.activateRoute.snapshot.paramMap.get('id');
  this.infirmierService.getInfirmierById(this.id).subscribe(
    (data:  any) => {
      this.infirmier = data;
    }
  )
}

editInfirmier(){
  this.infirmierService.updateInfirmier(this.id, this.infirmier).subscribe(
    () => {
      this.router.navigate(['dashboard-doctor/list-infermier']);
    }
  )

  }

}
