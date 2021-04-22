import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicpageComponent } from './components/musicpage/musicpage.component';

// import modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAudioPlayerModule } from 'ngx-audio-player';


@NgModule({
  declarations: [
    AppComponent,
    MusicpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatTabsModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule, MatRadioModule, MatInputModule, MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatSliderModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
