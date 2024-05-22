import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunityComponent } from './comunity-root/comunity-root.component';
import { ComunityFeedComponent } from './comnity-feed/comunity-feed.component';
import { ComunityOptionComponent } from './comunity-option/comunity-option.component';
import { ServerService } from 'src/servisec/server';
import { FormsModule } from '@angular/forms';
import { ComunityDeskComponent } from './comunity-desk/comunity-desk.component';
import { ComunityPostComponent } from './comunity-post/comunity-post.component';
import { ComunityUserComponent } from './comunity-user/comunity-user.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { ComunityPostPreviewComponent } from './comunity-post-preview/comunity-post-preview.component';
import { ComunityCommentComponent } from './comunity-comment/comunity-comment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LoadComponent } from 'src/app/compontnts/load/load.component';
import { AppModule } from 'src/app/app.module';
import { Load2Component } from './load/load.component';

export const ComunityRoutes:Routes = [
  {
      path:"feed",
      component: ComunityFeedComponent,
      
  },
  {
      path:"desk",
      component:ComunityDeskComponent
  },
  {
    path:"post/:guid",
    component:ComunityPostComponent
  },
  {
    path:"comunity",
    redirectTo: 'comunity/feed'
  }
]

@NgModule({
  declarations: [
    ComunityComponent,
    ComunityFeedComponent,
    ComunityOptionComponent,
    ComunityDeskComponent,
    ComunityPostComponent,
    ComunityUserComponent,
    LikeDislikeComponent,
    ComunityPostPreviewComponent,
    ComunityCommentComponent,
    AdminPanelComponent,
    UserPanelComponent,
    Load2Component
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forRoot(ComunityRoutes)
  ],
  exports:[
    ComunityComponent
  ],
  providers:[
    ServerService
  ]
})
export class ComunityModule { }
