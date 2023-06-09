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
import { ChatComponent } from './chat/chat.component';
import { ChatInputComponent } from './chat/chat-input/chat-input.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { MessageReceivedComponent } from './chat/chat-message/message-received/message-received.component';
import { MessageSentComponent } from './chat/chat-message/message-sent/message-sent.component';
import { ChatService } from './chat/chat.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphSwitchComponent } from './topic-panel/graph-switch/graph-switch.component';
import { DialogModule } from 'primeng/dialog';
import { UserService } from './shared/_services/user.service';
import { SubMessageDirective } from './chat/chat-message/subMessageDirective';
import { TextComponent } from './chat/chat-message/sub-messages/text.component';
import { SubMessageComponent } from './chat/chat-message/sub-messages/sub-message.component';
import { LineChartComponent } from './chat/chat-message/sub-messages/line-chart.component';
import { CircleChartComponent } from './chat/chat-message/sub-messages/circle-chart.component';
import { TopicService } from './topic-panel/_services/topic.service';

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
    ChatComponent,
    ChatInputComponent,
    ChatMessageComponent,
    MessageReceivedComponent,
    MessageSentComponent,
    GraphSwitchComponent,
    SubMessageDirective,
    TextComponent,
    SubMessageComponent,
    LineChartComponent,
    CircleChartComponent,
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
    InputTextareaModule,
    SelectButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
  ],
  providers: [ChatService, UserService, TopicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
