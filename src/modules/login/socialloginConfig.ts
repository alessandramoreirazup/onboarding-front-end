import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider()<878581987495-5c9c3q25c1pub5o506n7h2nen558s8a9.apps.googleusercontent.com>
      }
    ]);
  
    return config;
  }