import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Injectable()

export class PagesService {
    private dataTransfer = new Subject<any>();
    isDTPSource$ = this.dataTransfer.asObservable();
    constructor() { }

    isDTP(obj: any) {
        this.dataTransfer.next(obj);
    }

    showSuccess(msg) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success',
            text: msg,
            showConfirmButton: false,
            timer: 3000,
            backdrop: true,
            allowOutsideClick: false
        });
    }

    showError(msg) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! ' + msg,
            showConfirmButton: true,
            backdrop: true,
            allowOutsideClick: false
        });
    }

    showWarning(msg) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Warning',
            text: msg,
            showConfirmButton: true,
            backdrop: true,
            allowOutsideClick: false
        });
    }

    showWarningWithHyperLink(msg) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Warning',
            html: msg + '<a href="/project/create_project/0">create a project.</a>',
            showConfirmButton: true,
            backdrop: true,
            allowOutsideClick: false
        });
    }

    showInfo(msg) {
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Info',
            text: msg,
            showConfirmButton: false,
            backdrop: true,
            allowOutsideClick: false
        });
    }
}
