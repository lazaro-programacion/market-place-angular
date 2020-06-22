import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {
  public newUsuario: Users;

  displayBasic2: boolean;

  // tslint:disable-next-line: no-inferrable-types
  public usuario?: string = '';
  // tslint:disable-next-line: no-inferrable-types
  public email?: string = '';
  // tslint:disable-next-line: no-inferrable-types
  public password?: string = '';
  // tslint:disable-next-line: no-inferrable-types
  public imagen: FileList;
  public foto: string;
  public id = '';
  public code = '';
  public usuari: Users;
  public noFoto = '5cbIcPt3pOllUbB8kZEFDqm3.png';

public url = 'http://localhost:4000/api/user/get-image/';

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png',
    maxSize: '5',
    uploadAPI: {
      url: 'http://localhost:4000/api/user/upload-image/',
      method: 'POST'
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: false,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Cargar',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Selecciona archivo Files...',
      afterUploadMsg_success: 'Subido correctamente!',
      afterUploadMsg_error: 'Subida fallida !',
      sizeLimit: 'Pesa demasiado',
    },
  };

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.usuari = new Users(); }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(this.code).subscribe(
      serv => {
        this.usuari = serv, this.email = serv.email, this.usuario = serv.usuario, this.password = serv.password,
          this.id = serv._id;
      }
    );
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  guardar() {
    // tslint:disable-next-line: deprecation
    event.preventDefault();
    console.log('usuario', this.usuario, this.email, this.password); // (  this.usuario, this.email, this.rol, this.password)
    // tslint:disable-next-line: new-parens
    const newUsuario: Users = new Users();
    newUsuario.usuario = this.usuario;
    newUsuario.email = this.email;
    newUsuario.password = this.password;
    newUsuario.imagen = this.usuari.imagen;


    this.usersService.putUsers(newUsuario, this.code).subscribe(() => {
      this.router.navigate(['/editar-perfil']);
    });
  }
  changeImage = (e) => {
    this.imagen = e.target.files;
  }

  upload = () => {
    console.log(this.imagen);
    this.usersService.upload(this.imagen, this.usuari._id).subscribe((res) => {
      console.log('que essssssssssssss', res);
      this.foto = ' http://localhost:4000/' + res.path;
    });
  }

  DocUpload = (event: any) => {
    this.usuari.imagen = event.body.imagen;
    console.log('evento ', this.usuari.imagen);
  }
}
