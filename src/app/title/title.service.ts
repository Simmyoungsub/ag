import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  _nickName : string;

  constructor(config : UserServiceConfig) {
    if(config){
      this._nickName = config.userName;
    }
   }

   get nickName() {
     return this._nickName;
   }
}

@Injectable()
export class UserServiceConfig {
    userName : string;

    constructor() {
    
   }
}
