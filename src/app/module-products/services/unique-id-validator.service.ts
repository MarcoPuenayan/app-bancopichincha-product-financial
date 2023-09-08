import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdValidatorService implements AsyncValidator {

  constructor(private httpClient: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.httpClient
      .get<{ data: boolean }>(
        'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/verification',
        {
          params: { id: control.value },
        }
      )
      .pipe(
        map((d) => (d ? { existeId: true } : null)),

        catchError(() => of(null))
      );
  }
}
