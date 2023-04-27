import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationGraphComponent } from './topic-panel/navigation-graph/navigation-graph.component';
import { TopicPanelComponent } from './topic-panel/topic-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationGraphComponent,
    TopicPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
