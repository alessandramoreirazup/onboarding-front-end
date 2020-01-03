import { GoogleLoginProvider } from 'angularx-social-login';
import { UserModel } from 'src/modules/home/components/user.model';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrls: ['./adm-panel.component.scss']
})
export class AdmPanelComponent implements OnInit {

  public user: any = SocialUser;
  public loggedIn: boolean;
  googleUser: SocialUser;

  qtdAcertos: number = 5;
  porcentagemAcertos: number;
  qtdQuestões: number =  10;
  
 

  constructor( private authService: AuthService ) { }

  getEmail(){
      this.authService.authState.subscribe((googleUser) => {
        this.googleUser = googleUser;
        let email = this.googleUser.email;
      });
  }

  ngOnInit() {

    console.log(this.user.photoUrl);
    
    this.porcentagemAcertos = this.qtdAcertos * 100 / this.qtdQuestões;

    console.log(this.porcentagemAcertos);
  }
}

