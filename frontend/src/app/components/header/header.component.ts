import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Usuario } from 'src/app/model/usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() usuario_header_id: number;
  @Input() usuario_header_rol: string;

  // AddNewService | Servicio | Anfitrion | Perfil
  lbl: boolean[] = [false, true, false, true];

  constructor(private router: Router) {
    console.log(this.router.url);
  }

  ngOnInit(): void {
    this.activateBtn(this.getCurrentRoute());
  }

  getCurrentRoute():string {
    return this.router.url;
  }

  activateBtn(x:string) {
    console.log(this.usuario_header_id, this.usuario_header_rol)
    console.log("Esta es mi ruta: "+x);
    if (this.usuario_header_rol=="Anfitrión") { this.lbl[0] = true; }
    switch (x) {
      case ('/usuario/' + this.usuario_header_id + '/servicios'):
        this.lbl[1] = false; this.lbl[2] = true; break;
      // case ('/usuario/' + this.usuario_header_id + '/anfitrion'):
      //     this.lbl[1] = true; break;
      case ('/' + this.usuario_header_id + '/servicioForm'):
        this.lbl[0] = true; this.lbl[1] = true; break;
      case ('/' + this.usuario_header_id + '/perfil'):
        this.lbl[3] = false; break;
      // default:
      //   this.lbl[0] = true; this.lbl[1] = true; break;
    }
  }

}
