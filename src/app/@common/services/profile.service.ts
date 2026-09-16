import { Injectable } from '@angular/core';
import { PROFILE_INITIAL_VALUE } from '../constants/profile';
import { Profile } from '../types/profile';
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class ProfileService extends StoreService<Profile> {
  public initalValue(): Profile {
    return PROFILE_INITIAL_VALUE;
  }
}
