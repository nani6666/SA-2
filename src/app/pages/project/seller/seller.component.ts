import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  public image: any;
  companyInfoDiv: boolean;
  companylogoDiv: boolean;
  
  fileChange(input) {
      const reader = new FileReader();
      if (input.files.length) {
          const file = input.files[0];
          reader.onload = () => {
              this.image = reader.result;
          }
          reader.readAsDataURL(file);
      }
  }

  removeImage(): void {
      this.image = '';
  }
  constructor() { }

  ngOnInit() {
    this.companyInfoDiv = true ;
  }
 
  hideShow(id) {
    const hideCompanyinfo = document.getElementById(id) ;
    console.log(hideCompanyinfo.classList.length);
    if (hideCompanyinfo.classList.length == 3) {
    this.companyInfoDiv = true ;
    this.companylogoDiv = true ;
     (<any>hideCompanyinfo).classList.remove('companyInfo');
    } else {
        this.companyInfoDiv = false ;
        this.companylogoDiv = false ;
      (<any>hideCompanyinfo).classList.add('companyInfo');
    }
  }

}
