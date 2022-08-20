import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {

  readonly controlsState = new BehaviorSubject<boolean>(false);
}
