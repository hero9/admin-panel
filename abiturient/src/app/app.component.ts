import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewsPage } from '../pages/news/news';
import { QuizPage } from '../pages/quiz/quiz';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

	rootPage: any = NewsPage;

  pages: Array<{title: string, component: any}>;

  constructor(
		public platform: Platform, 
		public statusBar: StatusBar, 
		public splashScreen: SplashScreen,
	) {
    this.initializeApp();

    this.pages = [
			{ title: 'Новости', component: NewsPage },
			{ title: 'Викторина', component: QuizPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
	}
	
	logout(){
		localStorage.removeItem("jwtToken");
		this.nav.setRoot( HomePage );
	}
}
