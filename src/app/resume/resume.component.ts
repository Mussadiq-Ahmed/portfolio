import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section style="padding:40px 20px; max-width:1200px; margin:0 auto;">
      <div style="text-align:center; margin-bottom:40px; animation: fadeInDown 0.6s ease-out;">
        <h1 style="margin:0 0 12px 0; font-size:2.5rem; font-weight:400; color:#2c3e50; letter-spacing:-0.5px;">My Curriculum Vitae</h1>
        <p style="margin:0 0 24px; color:#2c3e50; opacity:0.7; font-size:1.05rem;">A comprehensive overview of my professional experience and skills</p>
        <button mat-raised-button (click)="downloadResume()" 
           style="background:#2c3e50; color:white; font-weight:500; padding:12px 36px; font-size:0.95rem; text-transform:uppercase; letter-spacing:1.2px; box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);">
          <mat-icon style="margin-right:8px; vertical-align:middle;">download</mat-icon>
          Download CV
        </button>
      </div>

      <div style="animation: fadeInUp 0.8s ease-out;">
        <div style="background:white; box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12); border-radius:12px; overflow:hidden; pointer-events: auto;">
          <iframe 
            [src]="pdfUrl" 
            style="width:100%; height:calc(100vh - 300px); min-height:800px; display:block; border:none; background:white; user-select: none;"
            (contextmenu)="$event.preventDefault()"
            title="Resume PDF Viewer"
            #pdfViewer
          ></iframe>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      animation: fadeIn 0.5s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInDown {
      from { 
        opacity: 0; 
        transform: translateY(-20px);
      }
      to { 
        opacity: 1; 
        transform: translateY(0);
      }
    }
    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px);
      }
      to { 
        opacity: 1; 
        transform: translateY(0);
      }
    }
    mat-card:hover {
      box-shadow: 0 12px 40px rgba(26, 35, 126, 0.18) !important;
      transition: box-shadow 0.3s ease;
    }
  `]
})
export class ResumeComponent {
  pdfUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) {
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/Musadiq_Ahmed_CV.pdf#toolbar=0&navpanes=0&scrollbar=1');
  }

  async downloadResume() {
    try {
      // Detect Safari/iOS
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      
      if (isSafari || isIOS) {
        // Redirect Safari users to Chrome with the PDF link
        const pdfUrl = window.location.origin + '/assets/Musadiq_Ahmed_CV.pdf';
        const chromeIntent = `googlechrome://${window.location.host}/resume`;
        
        // Try to open in Chrome app (iOS)
        window.location.href = chromeIntent;
        
        // Fallback after a short delay if Chrome didn't open
        setTimeout(() => {
          window.open(pdfUrl, '_blank');
        }, 1500);
      } else {
        // Chrome/Firefox approach: use blob for direct download
        const response = await fetch('assets/Musadiq_Ahmed_CV.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Musadiq_Ahmed_CV.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      }
    } catch (error) {
      console.error('Download failed:', error);
      window.open('assets/Musadiq_Ahmed_CV.pdf', '_blank');
    }
  }
}
