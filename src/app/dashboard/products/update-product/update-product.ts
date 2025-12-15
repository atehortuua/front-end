import { Component, inject } from '@angular/core';
import { Product } from '../../../services/product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  imports: [  RouterLink,FormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {
  private productService = inject (Product);
  private router = inject (Router)
  private route = inject(ActivatedRoute)
  id: any = ''



   product= {
    nameRestaurant: '',
    name :'',
    description:'',
    image : '',
    price : null
  };

 
ngOnInit(){
  this.id = this.route.snapshot.paramMap.get('id')
    this.getProductById(this.id);
}


 onSubmit(){
    this.productService.updateproduct(this.id, this.product).subscribe({
      next: (res: any)=> {
        console.log(res);
      alert('producto Actualizado')
      this.router.navigate(['/updateProduct/:id'])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  };

  getProductById(id : string){
    this.productService.getProductsById(id).subscribe({
      next: (res : any)=>{
        console.log(res);
        
        this.product = res.product
        
        
      },
      error : (err) =>{
        console.log(err)
      }
    })
  }

}
