
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ClientsComponent } from '../clients/clients.component';
import { WorkPerformanceComponent } from '../work-performance/work-performance.component';
import { InnovativeSolutionsComponent } from '../innovative-solutions/innovative-solutions.component';
import { EnhanceSolutionComponent } from '../enhance-solution/enhance-solution.component';
import { BecomePartnerComponent } from '../become-partner-section/become-partner.component';
import { NewsComponent } from '../news/news.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule,
    WorkPerformanceComponent,HeroSectionComponent,InnovativeSolutionsComponent,
    ClientsComponent,EnhanceSolutionComponent,  BecomePartnerComponent,NewsComponent,ContactSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
 
}