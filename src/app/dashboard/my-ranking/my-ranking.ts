import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Votes } from '../../services/votes';

interface rankingItem{
  productId: string,
  name: string,
  image: string,
  totalVotes : number;
}



@Component({
  selector: 'app-my-ranking',
  imports: [CommonModule],
  templateUrl: './my-ranking.html',
  styleUrl: './my-ranking.css',
})
export class MyRanking {

  private votesService = inject(Votes);

  ranking :rankingItem[]= [];
  loading: boolean = true;
  error : string = '';

  ngOnInit(): void{
    this.loadRanking();
  }

  loadRanking(): void{
    this.loading = true;
    this.error= '';
    this.votesService.getRankingByOwner().subscribe({
      next: (response: any)=>{
        this.ranking = response.ranking || [];
        this.loading = false;
      },
      error: (err :any)=>{
        console.log('error al cargar el ranking', err);
        this.error = 'no se pudo cargar el ranking de tu producto'
        this.loading=false;
      }
    });
  }
  getMedalClass(index: number): string{
    if (index === 0) return 'gold';
    if (index === 1) return 'silver';
    if (index === 2) return 'bronze';
    return '';
  }

  getMedalEmoji(index: number): string {
    if (index === 0) return '';
    if (index === 1) return '';
    if (index === 2) return '';
    return `${index + 1}°`;
  }
}
