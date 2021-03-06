import { ProductModel } from './../models/productModel';
import { ProductService } from './../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;
  product = new ProductModel();
  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.createProductForm();
  }

  saveProduct() {
    this.product = Object.assign({}, this.productForm.value)
  
    this.productService.saveProduct(this.product).subscribe(res => {
     
    }, error => {

    })

  }

 
  private createProductForm() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required]

    })
  }

}
