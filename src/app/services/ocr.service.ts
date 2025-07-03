import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  private apiUrl = 'https://api.ocr.space/parse/image';
  private apiKey = 'K86016719788957'; // reemplaza con tu clave real

  constructor(private http: HttpClient) {}

  extractText(base64Image: string) {
    const formData = new FormData();
    formData.append('base64Image', base64Image);
    formData.append('language', 'spa'); // puedes usar 'eng' si es inglés

    const headers = new HttpHeaders({
      apikey: this.apiKey
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
