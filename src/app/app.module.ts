import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationGraphComponent } from './topic-panel/navigation-graph/navigation-graph.component';
import { TopicPanelComponent } from './topic-panel/topic-panel.component';
import { TopicBrowseComponent } from './topic-panel/topic-browse/topic-browse.component';
import { TopicAboutComponent } from './topic-panel/topic-about/topic-about.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SubscriptionBannerComponent } from './topic-panel/topic-browse/subscription-banner/subscription-banner.component';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ResourcesListComponent } from './topic-panel/topic-browse/resources-list/resources-list.component';
import { ResourceItemComponent } from './topic-panel/topic-browse/resources-list/resource-item/resource-item.component';
import { HomeComponent } from './home/home.component';
import { SearchBoxComponent } from './home/search-box/search-box.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavigationGraphComponent,
    TopicPanelComponent,
    TopicBrowseComponent,
    TopicAboutComponent,
    SubscriptionBannerComponent,
    ResourcesListComponent,
    ResourceItemComponent,
    HomeComponent,
    SearchBoxComponent,
    TopbarComponent,
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
    MenubarModule,
    AvatarModule,
    AutoCompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
