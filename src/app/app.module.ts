import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationGraphComponent } from './topic-panel/navigation-graph/navigation-graph.component';
import { TopicPanelComponent } from './topic-panel/topic-panel.component';
import { TopicVideosComponent } from './topic-panel/topic-browse/topic-videos/topic-videos.component';
import { TopicPublicationsComponent } from './topic-panel/topic-browse/topic-publications/topic-publications.component';
import { TopicInteractiveDataComponent } from './topic-panel/topic-browse/topic-interactive-data/topic-interactive-data.component';
import { TopicBrowseComponent } from './topic-panel/topic-browse/topic-browse.component';
import { TopicAboutComponent } from './topic-panel/topic-about/topic-about.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SubscriptionBannerComponent } from './topic-panel/topic-browse/subscription-banner/subscription-banner.component';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { PublicationItemComponent } from './topic-panel/topic-browse/topic-publications/publication-item/publication-item.component';
import { VideoItemComponent } from './topic-panel/topic-browse/topic-videos/video-item/video-item.component';
import { InteractiveDataItemComponent } from './topic-panel/topic-browse/topic-interactive-data/interactive-data-item/interactive-data-item.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavigationGraphComponent,
    TopicPanelComponent,
    TopicVideosComponent,
    TopicPublicationsComponent,
    TopicInteractiveDataComponent,
    TopicBrowseComponent,
    TopicAboutComponent,
    SubscriptionBannerComponent,
    PublicationItemComponent,
    VideoItemComponent,
    InteractiveDataItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    DividerModule,
    FieldsetModule,
    AccordionModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
