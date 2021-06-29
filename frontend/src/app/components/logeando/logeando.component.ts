import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { ControllerService } from 'src/app/services/controller.service';
import { Router }from '@angular/router';
@Component({
  selector: 'app-logeando',
  templateUrl: './logeando.component.html',
  styleUrls: ['./logeando.component.css']
})
export class LogeandoComponent implements OnInit {

  value='';
  usuarios:Usuario[];
 
  public loginUserForm: FormGroup;

  constructor(private router: Router, private controllerService: ControllerService) { }
  validar(){

    for(var i=0; i<this.usuarios.length; i++){
      if(this.usuarios[i].name==this.value){
        console.log(this.usuarios[i].name)
        this.router.navigate(['usuario', this.usuarios[i].id, 'servicios']);
      }
    }
    if(this.usuarios?.find(u => u.name == this.value)===undefined)window.alert('usuario no identificado');
  }
  ngOnInit(): void {
    this.controllerService.getAllUsuarios().subscribe((result:any)=>{this.usuarios=result.data});
  }

}
