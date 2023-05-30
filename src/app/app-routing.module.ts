import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicPanelComponent } from './topic-panel/topic-panel.component';
import { NavigationGraphComponent } from './topic-panel/navigation-graph/navigation-graph.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: 'panel',
    component: TopicPanelComponent,
    children: [
      {
        path: 'graph/:id',
        component: NavigationGraphComponent,
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
