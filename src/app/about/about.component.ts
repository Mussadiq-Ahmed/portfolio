import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section style="min-height:calc(100vh - 200px); display:flex; align-items:center; justify-content:center; padding:clamp(20px, 5vw, 40px); color:#2c3e50;">
      <div style="max-width:900px; text-align:center; width:100%;">
        <div style="margin-bottom:clamp(24px, 4vw, 32px); position:relative; display:inline-block;">
          <div class="profile-bg"></div>
          <img src="assets/Musadiq_Ahmed.JPEG" alt="Musadiq Ahmed" class="profile-img" />
        </div>

        <h1 class="name-title">Musadiq Ahmed</h1>
        <h2 class="subtitle">Senior Software Engineer / Full Stack Developer</h2>

        <div class="description-container">
          <p class="description-text">
            Software Engineer with 5+ years of experience building scalable backend systems and cloud-native applications for real-world customer solutions.
          </p>
          <p class="description-text">
            Currently contributing to high-impact applications using Java, Kotlin, Python, and JavaScript with REST and GraphQL APIs.
          </p>
          <p class="description-text">
            Experienced in designing features, optimizing performance, and deploying reliable systems on AWS with CI/CD, centralized logging, and monitoring. Thrive in fast-paced engineering environments with strong ownership and impact. Passionate about delivering production-ready solutions, enhancing user experience, and continuously learning new technologies.
          </p>
        </div>

        <div class="social-icons-container">
          <a href="mailto:mussadiq98amed@gmail.com" mat-icon-button class="social-icon" title="Email" aria-label="Email">
            <mat-icon>email</mat-icon>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" mat-icon-button class="social-icon" title="GitHub" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/musadiq-ahmed/" target="_blank" rel="noopener noreferrer" mat-icon-button class="social-icon" title="LinkedIn" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/mussu__ahmed/" target="_blank" rel="noopener noreferrer" mat-icon-button class="social-icon" title="Instagram" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      animation: fadeIn 0.8s ease-in;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Profile Picture Styles */
    .profile-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: clamp(180px, 25vw, 220px);
      height: clamp(180px, 25vw, 220px);
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      z-index: 0;
    }

    .profile-img {
      width: clamp(180px, 25vw, 220px);
      height: clamp(180px, 25vw, 220px);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      object-fit: cover;
      object-position: center 30%;
      position: relative;
      z-index: 1;
      box-shadow: 0 20px 60px rgba(44, 62, 80, 0.3);
      border: 4px solid #ffffff;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      display: block;
    }

    /* Typography */
    .name-title {
      margin: 0 0 8px 0;
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: 400;
      color: #2c3e50;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }

    .subtitle {
      margin: 0 0 clamp(24px, 4vw, 32px) 0;
      font-size: clamp(0.85rem, 2.5vw, 1.3rem);
      font-weight: 400;
      color: #2c3e50;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      line-height: 1.4;
    }

    .description-container {
      margin: 0 auto clamp(32px, 5vw, 40px);
      max-width: 800px;
      padding: 0 16px;
    }

    .description-text {
      margin: 0 0 16px;
      color: #2c3e50;
      line-height: 1.8;
      font-size: clamp(0.9rem, 2vw, 1.05rem);
      font-weight: 300;
      text-align: center;
    }

    @media (min-width: 768px) {
      .description-text {
        text-align: left;
      }
    }

    /* Social Icons */
    .social-icons-container {
      display: flex;
      gap: clamp(16px, 3vw, 24px);
      justify-content: center;
      padding-top: 20px;
      border-top: 1px solid rgba(44, 62, 80, 0.1);
      flex-wrap: wrap;
    }

    .social-icon {
      color: #2c3e50;
      width: clamp(44px, 8vw, 48px);
      height: clamp(44px, 8vw, 48px);
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #2c3e50;
      border-radius: 50%;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .social-icon:hover {
      background-color: #2c3e50 !important;
      color: #ffffff !important;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 20px rgba(44, 62, 80, 0.3);
    }

    .social-icon:hover mat-icon,
    .social-icon:hover svg {
      color: #ffffff;
      fill: #ffffff;
    }

    .social-icon:active {
      transform: translateY(-2px) scale(1.02);
    }

    /* Mobile Optimizations */
    @media (max-width: 768px) {
      .description-text {
        text-align: center;
      }

      .profile-bg,
      .profile-img {
        width: 180px;
        height: 180px;
      }

      .social-icon {
        width: 44px;
        height: 44px;
      }
    }

    @media (max-width: 480px) {
      .subtitle {
        letter-spacing: 1px;
      }

      .description-container {
        padding: 0 8px;
      }
    }
  `]
})
export class AboutComponent {}
