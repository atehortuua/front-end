import { Component, inject } from '@angular/core';
import { Users } from '../../../services/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  imports: [],
  templateUrl: './all-users.html',
  styleUrl: './all-users.css',
})
export class AllUsers {
  private userService = inject(Users);
  allUsers: any;

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        this.allUsers = res.users;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  delete(id :string){
    this.userService.deleteUserById(id).subscribe({
      next : (res : any)=>{
        console.log(res)
        this.getAllUsers
      },
      error : (err)=>{
        console.log(err)

      }
      
    })
  }


  deleteUser(id: string) {
    Swal.fire({
      title: 'Estas seguro de eliminar este usuario?',
      text: "Esta accion no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id);
        Swal.fire({
          title: 'Eliminar!',
          text: 'Has eliminado el usuario',
          icon: 'success',
        });
      }
    });
  }
}
