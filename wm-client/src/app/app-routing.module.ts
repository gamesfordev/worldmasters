import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';


const routes: Routes = [
{
  path: '',
  component: StartScreenComponent
},
{
  path: 'game',
  component: GameScreenComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
