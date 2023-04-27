import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationGraphComponent } from './topic-panel/navigation-graph/navigation-graph.component';
import { TopicPanelComponent } from './topic-panel/topic-panel.component';
import { TopicVideosComponent } from './topic-panel/topic-videos/topic-videos.component';
import { TopicPublicationsComponent } from './topic-panel/topic-publications/topic-publications.component';
import { TopicInteractiveDataComponent } from './topic-panel/topic-interactive-data/topic-interactive-data.component';
import { TopicBrowseComponent } from './topic-panel/topic-browse/topic-browse.component';
import { TopicAboutComponent } from './topic-panel/topic-about/topic-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationGraphComponent,
    TopicPanelComponent,
    TopicVideosComponent,
    TopicPublicationsComponent,
    TopicInteractiveDataComponent,
    TopicBrowseComponent,
    TopicAboutComponent
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
