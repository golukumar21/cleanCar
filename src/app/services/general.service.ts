import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()

export class GeneralService {

    private dataTransfer = new Subject<any>();
    dateandTime$ = this.dataTransfer.asObservable();
    constructor(private http: HttpClient) { }
    private apiURL = environment.baseUrl;
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    private options = { headers: this.headers }

    isDTP(obj: any) {
        this.dataTransfer.next(obj);
    }

}
