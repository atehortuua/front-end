import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Votes } from '../../services/votes';

@Component({
  selector: 'app-votes-product',
  standalone: true,
  imports: [ RouterModule,CommonModule,DatePipe,],
  templateUrl: './votes-product.html',
  styleUrls: ['./votes-product.css'],
})
export class VotesProduct {

  voteService = inject(Votes);
  route = inject(ActivatedRoute);

  productId = '';
  votes: any[] = [];
  ranking: any[] = [];
  totalVotes = 0;
  loading = true;

 ngOnInit() {
  this.getVotes();
   
}

getVotes() {
  this.voteService.getAllVotes().subscribe({
    next: (res: any) => {
      this.votes = res.votes || [];
      this.totalVotes = this.votes.length;
      this.loading = false;
      console.log("Votos cargados:", this.votes);
    },
    error: (err) => {
      console.error("Error cargando votos", err);
      this.loading = false;
    }
  });

}

}
