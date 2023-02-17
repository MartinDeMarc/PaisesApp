import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.PaisService.getPaisPorCodigo(id)))
      .subscribe((resp) => {
        console.log(resp);
      }); //Access observable donde estan los parametros

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.PaisService.getPaisPorCodigo(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
