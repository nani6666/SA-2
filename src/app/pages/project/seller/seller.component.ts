import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  public image:any;
  
  fileChange(input){
      const reader = new FileReader();
      if (input.files.length) {
          const file = input.files[0];
          reader.onload = () => {
              this.image = reader.result;
          }
          reader.readAsDataURL(file);           
      }
  }

  removeImage():void{
      this.image = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
