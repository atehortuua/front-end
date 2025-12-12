import { Token } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-verified-user',
  imports: [],
  templateUrl: './verified-user.html',
  styleUrl: './verified-user.css',
})
export class VerifiedUser {
  // private verifiedService = inject(Token)
  private route = inject(ActivatedRoute)
  private router = inject(Router);
  private auth= inject (Auth)
  
  token : any = ''
  verified : boolean = false;

  ngOnInit(){
    this.token = this.route.snapshot.paramMap.get('token')
    this.verify(this.token);
   
  }

  verify(token : string){
    this.auth.verifyUser(token).subscribe({
      next: (res :any)=>{
        console.log(res)
        this.verified= !this.verified
        
        setTimeout(()=>{
        this.router.navigate(['/#'])
        }, 3000)
      },
      error : (err)=> {
        console.log(err)
      }
  })
}
}



