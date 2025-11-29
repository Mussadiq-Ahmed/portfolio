import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:40px 20px; max-width:1000px; margin:0 auto;">
      <div style="text-align:center; margin-bottom:40px;">
        <h1 style="margin:0 0 12px 0; font-size:2.5rem; font-weight:400; color:#2c3e50; letter-spacing:-0.5px;">Skills & Expertise</h1>
        <p style="margin:0; color:#2c3e50; opacity:0.7; font-size:1.05rem;">Technical skills and tools I work with</p>
      </div>
      
      <div style="display:grid; gap:24px;">
        <div *ngFor="let category of skillCategories" style="padding:28px; background:#475669; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15); border-radius:16px;">
          <h3 style="margin:0 0 20px 0; color:#95a5b8; font-size:1.1rem; font-weight:500; text-transform:uppercase; letter-spacing:1px;">{{category.name}}</h3>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <span *ngFor="let skill of category.skills" style="background:white; color:#2c3e50; padding:10px 20px; border-radius:25px; font-size:0.9rem; font-weight:500;">{{skill}}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      animation: fadeIn 0.6s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Programming & APIs',
      skills: ['Java', 'Kotlin', 'Python', 'JavaScript', 'Angular', 'REST API', 'GraphQL API', 'SOAP API']
    },
    {
      name: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Cloud Foundry', 'Concourse', 'Kibana', 'Kafka', 'Kinesis']
    },
    {
      name: 'Languages',
      skills: ['English', 'Hindi', 'Kannada']
    }
  ];
}
