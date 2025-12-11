import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Votes } from '../../services/votes';

interface RankingItem {
  productId: string;
  name: string;
  image: string;
  totalVotes: number;
}

@Component({
  selector: 'app-ranking-votes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking-votes.html',
  styleUrls: ['./ranking-votes.css']
})
export class RankingVotesComponent implements OnInit {
  private votesService = inject(Votes);
  
  ranking: RankingItem[] = [];
  loading: boolean = true;
  error: string = '';

  ngOnInit(): void {
    this.loadRanking();
  }

  loadRanking(): void {
    this.loading = true;
    this.error = '';
    this.votesService.getRanking().subscribe({
      next: (response: any) => {
        this.ranking = response.ranking || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error al cargar el ranking:', err);
        this.error = 'No se pudo cargar el ranking de votos';
        this.loading = false;
      }
    });
  }

  getMedalClass(index: number): string {
    if (index === 0) return 'gold';
    if (index === 1) return 'silver';
    if (index === 2) return 'bronze';
    return '';
  }

  getMedalEmoji(index: number): string {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `${index + 1}°`;
  }
}
