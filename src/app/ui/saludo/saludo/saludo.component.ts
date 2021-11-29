import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/* Services */
import { SaludoService } from 'src/app/network/saludo/saludo.service';

/* Dto y demás datos */
import { SaludoDto } from 'src/app/data/dto/SaludoResponseDto';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  public saludoDto: SaludoDto;
  public saludoOut: string;

  constructor(private saludoService: SaludoService) { }

  ngOnInit(): void {
    this.getSaludo();
    //this.saludoOut = 'Hola amigos';
  }

  private getSaludo(){
    this.saludoService.getSaludo().subscribe((data: HttpResponse<SaludoDto>)=>{
      try{
        console.log(data);
        this.saludoDto = data.body;
        this.saludoOut = this.saludoDto.message;
        //
      }catch(err){}
    }, errorResponse => {
      console.error('Error en la respuesta ', errorResponse);
      //console.error('Error en la respuesta, data body ', data.body);
    });
  }

}
