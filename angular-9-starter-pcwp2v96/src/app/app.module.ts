import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsdInrPipe } from './pipe/usd-inr.pipe';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { DiceRollSecondComponent } from './dice-roll-second/dice-roll-second.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    StopWatchComponent,
    UsdInrPipe,
    DiceRollerComponent,
    DiceRollSecondComponent,
    TrafficLightComponent,
    TicTacToeComponent,
    TransferListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
