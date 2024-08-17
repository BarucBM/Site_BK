import { Routes } from '@angular/router';
import { HomeComponent } from './components/00_home/home.component';
import { AlbumsComponent } from './components/02_albums/albums.component';
import { HistoriaComponent } from './components/historia/historia.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'albums',
        component:AlbumsComponent
    },
    {
        path: 'historia',
        component:HistoriaComponent
    }

];
