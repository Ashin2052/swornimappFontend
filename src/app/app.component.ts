import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {AuthGuardService} from './services/auth-service/auth.guard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-universal-heroku';
  constructor(    private titleService: Title,
                  private meta: Meta,
                  private authService:AuthGuardService) {
    this.meta.addTags([
      {name: 'google-site-verification', content: 'ci2u4_rFCnV4ahAB9FVbM9RH9amaItDJggMX92rN0-s'},
      { name: 'keywords', content: 'Swornim wind pipe industry nepal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Ashin mahat' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  ngOnInit() {
    this.titleService.setTitle('Swornim wind pipe industry.Buy weed pipes,smoking pipes in nepal.');
    this.meta.updateTag(
      { name: 'description', content: 'Buy weed pipes,smoking pipes in nepal' }
    );
  }
}
