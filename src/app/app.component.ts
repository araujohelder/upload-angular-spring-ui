import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {}

  inputFileChange(event) {

    if (event.target.files && event.target.files[0]) {
      const arq = event.target.files[0];
      const formData = new FormData();
      formData.append('arquivo', arq);

      this.http.post('http://localhost:8080/arquivos', formData).subscribe( resposta => {
        console.log('Upload realizado com sucesso!!!');
      });
    }

  }

}
