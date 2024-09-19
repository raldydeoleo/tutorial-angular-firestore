import { Component, OnInit } from '@angular/core';
//import { PolicyService } from 'src/app/policy.service';
//import { Policy } from 'src/app/policy.model';
//import { identifierModuleUrl } from '@angular/compiler';
//import { ActivatedRoute } from '@angular/router';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Subscription } from 'rxjs';
//import { DocumentSnapshot } from '@firebase/firestore-types';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

//  policies: Policy[];
  constructor() { }

  ngOnInit() {

  /*  this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          //data: e.payload.doc.data()
          //...e.payload.doc.data()
          
        } as Policy;
      })
    });


    /*this.policyService.exampleGetCollection().subscribe(data => {
      this.policies = data.map(e => {

        //const data = e.payload.doc.data(); 
        //const id = e.payload.doc.id; 
        return {id: e.payload.doc.id,
          
          
          } as Policy;

      })
    });*/
}

/*  create(policy: Policy){
      this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }*/

}
