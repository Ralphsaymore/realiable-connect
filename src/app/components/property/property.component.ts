import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators} from '@angular/forms';
  import { HttpClient } from '@angular/common/http';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

    dataForm: FormGroup;
    fetchdata = '';
    properties = '';
    constructor(private frmbuilder: FormBuilder,
      private http: HttpClient,
      private router: Router) {
      this.dataForm = frmbuilder.group({
        id: ['', null],
        name: ['', Validators.required],
        mobile: ['', Validators.required],
        designation: ['', Validators.required],
        salary: ['', Validators.required]
        });
    }
  
    ngOnInit() {
     /*  this.http.get('http://localhost:88/reliable-connect/api/read.php').subscribe(
              data => {
                  this.fetchdata = data as string;
                  console.log('Data fetched is successful ', data);
              },
              error => {
                  console.log('Error', error);
              }
          ); */
          this.GetProperties();
    }
  //Fetch all properties using the getProperties function in the API
  GetProperties(){
      this.http.get('http://localhost:88/reliable-connect/api/getProperties.php').subscribe(
          data => {
              this.properties = data as string;
              console.log('Data fetched is successful ', data);
          },
          error => {
              console.log('Error', error);
          }
      );
  }
  
  PostData(dataForm) {
    this.http.post('http://localhost:88/reliable-connect/api/insertProperty.php', dataForm).subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
    // console.log(signupForm.controls);
  }

  updateData(dataForm) {
    this.http.post('http://localhost:88/reliable-connect/api/update.php', dataForm).subscribe(
            data => {
                console.log('Update Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
  }

  deleteData(dataForm) {
    this.http.post('http://localhost:88/reliable-connect/api/delete.php', dataForm).subscribe(
            data => {
                console.log('Delete Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            } 
        );
    }

    loadSome() {
        this.router.navigate(['parent', 'Hii Scope']);
    }
}