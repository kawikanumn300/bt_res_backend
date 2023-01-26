import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public message :string ="";
  public progress :number =0;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }
ngOnInit(){
}
uploadFile = (files: any) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://utcc-prc.demotoday.net/bt-order-api/api/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * (event.loaded || 1) / (event.total || 1));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
}
}
