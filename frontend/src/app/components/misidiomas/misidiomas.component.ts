import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { idioma } from 'src/app/model/idiomas';
import { Usuario } from 'src/app/model/usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-misidiomas',
  templateUrl: './misidiomas.component.html',
  styleUrls: ['./misidiomas.component.css']
})
export class MisidiomasComponent implements OnInit {

  constructor(private controllerService: ControllerService, 
    private route: ActivatedRoute) { }

  usuario: Usuario;
  usuarioId: number;
  misidiomas: idioma[];
  idiomas: idioma[];

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUsuario();
    this.getmisidiomas();
    this.getidiomas();
  }


  getUsuario():void {
    this.controllerService.getUsuarioById(this.usuarioId)
        .subscribe((result:any) => { this.usuario = result.data })
  }

  getmisidiomas() :void{
    this.controllerService.getIdiomasByUsuarioId(this.usuarioId)
    .subscribe((result:any) => { this.misidiomas = result.data })

  }
  borrar(id_idioma:number) :void
  {

    this.controllerService.deleteidiomausuario(id_idioma,this.usuarioId)
    .subscribe((result:any) => { })
    this.getidiomas();
  }
  getidiomas() :void{
    this.controllerService.getIdiomas()
    .subscribe((result:any) => { this.idiomas = result.data })

  }
  agregar(id_idioma:number) :void
  {

    this.controllerService.addidiomausuario(id_idioma,this.usuarioId)
    .subscribe((result:any) => { })
    this.getidiomas();
  }
}
