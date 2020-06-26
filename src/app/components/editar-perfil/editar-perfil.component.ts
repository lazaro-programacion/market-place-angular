import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from "../../../config/global";

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  public user: Users;
  public status: string = '';
  public identity;
  public token: string;
  public url: string;
  public afuConfig: any;

  // tslint:disable-next-line: no-inferrable-types
  public usuario?: string = '';
  // tslint:disable-next-line: no-inferrable-types
  public email?: string = '';
  // tslint:disable-next-line: no-inferrable-types
  public password?: string = '';
  public id = '';
  public code = '';
  public usuari: Users;

  

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.user = new Users("","","","","",""); }

  ngOnInit(): void {
   
    this.url = GLOBAL.url;
    this.identity= this.usersService.getIdentity();
    this.token= this.usersService.getToken();
    this.user = this.identity
   
   // console.log(this.identity, this.user)
   this.afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png., .gift, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: GLOBAL.url+'/user/upload-image/',
      method:"POST",
      headers: {
       "Content-Type" : "multipart/form-data",
       "Authorization": this.token
        
      },
      
    
          },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen de tu avatar...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
   
  };

  }

 


  guardar() {
    //console.log('usuario',  this.user._id, this.code) 
    

                                  this.usersService.putUsers(this.user, this.user._id).subscribe(
                                    response =>{
                                         if(!response.user){
                                           this.status = 'error'
                                         }else{
                                           localStorage.setItem('identity', JSON.stringify(this.user))
                                           this.status = 'success'
                                           // console.log(this.user)
                    
                                          } 
                                    },
                                    error =>{
                                      const message = <any>error
                                      if(message != null){
                                        this.status = 'error'
                                      }
                                      
                                    }
                                  )


   
  }

  DocUpload(event){
    //console.log('mi imagen', event)
    let image_data = event.body
   //console.log(image_data.image)
   
    this.user.imagen = image_data.imagen
   // console.log('imagen usuario', this.user.imagen)
   }

}

