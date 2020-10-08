import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { fakeBackendProvider } from './interceptors/fake-backend.interceptor';
import { FrameComponent } from './components/frame/frame.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskLinkComponent } from './components/task-link/task-link.component';
import { TaskLinkItemDropdownComponent } from './components/task-link-items/task-link-item-dropdown/task-link-item-dropdown.component';
import { HelpIconComponent } from './components/helpers/help-icon/help-icon.component';
import { TaskLinkItemContentComponent } from './components/task-link-items/task-link-item-content/task-link-item-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    TaskLinkComponent,
    TaskLinkItemDropdownComponent,
    HelpIconComponent,
    TaskLinkItemContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
