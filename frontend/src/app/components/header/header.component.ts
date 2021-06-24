import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() usuarioId: number;
  usuario: Usuario;

  lblServicio: boolean = false;
  lblAnfitrion: boolean = false;

  constructor(private router: Router, 
    private controllerService: ControllerService) {
    console.log(this.router.url);
  }

  ngOnInit(): void {

    this.getUsuario();

    if(this.getCurrentRoute() == ('/usuario/' + this.usuarioId + '/servicios')){
      this.lblAnfitrion = true;
    }
    else if (this.getCurrentRoute() == ('/usuario/' + this.usuarioId + '/anfitrion')){
      this.lblServicio = true;
    }
    else if(this.getCurrentRoute() == ('/' + this.usuarioId + '/servicioForm') ||
            this.getCurrentRoute() == ('/' + this.usuarioId + '/perfil'))
    {
      this.lblAnfitrion = true;
      this.lblServicio = true;
    }
  }

  getUsuario(): void {
    this.controllerService.getUsuarioById(this.usuarioId)
    .subscribe((result: any) => this.usuario = result.data)
  }

  getCurrentRoute():string {
    return this.router.url;
  }

}
