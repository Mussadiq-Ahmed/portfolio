import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <header class="header-container">
      <nav class="nav-wrapper">
        <a routerLink="/" class="logo-link">
          <span class="logo-text">M</span>
          <span class="name-text">usadiq</span>
          <span class="logo-text">A</span>
          <span class="name-text">hmed</span>
        </a>
        
        <div class="nav-links">
          <a routerLink="/about" routerLinkActive="active" class="nav-link" [class.hidden]="isActive('/about')">
            <span class="link-text">About</span>
            <span class="link-underline"></span>
          </a>
          <a routerLink="/resume" routerLinkActive="active" class="nav-link" [class.hidden]="isActive('/resume')">
            <span class="link-text">Review My CV</span>
            <span class="link-underline"></span>
          </a>
          <a routerLink="/skills" routerLinkActive="active" class="nav-link" [class.hidden]="isActive('/skills')">
            <span class="link-text">Skills</span>
            <span class="link-underline"></span>
          </a>
        </div>

        <button class="mobile-menu-btn" (click)="toggleMobileMenu()" aria-label="Toggle menu">
          <mat-icon>{{ mobileMenuOpen ? 'close' : 'menu' }}</mat-icon>
        </button>
      </nav>

      <div class="mobile-menu" [class.open]="mobileMenuOpen">
        <a routerLink="/about" (click)="closeMobileMenu()" class="mobile-link" [class.hidden]="isActive('/about')">About</a>
        <a routerLink="/resume" (click)="closeMobileMenu()" class="mobile-link" [class.hidden]="isActive('/resume')">Review My CV</a>
        <a routerLink="/skills" (click)="closeMobileMenu()" class="mobile-link" [class.hidden]="isActive('/skills')">Skills</a>
      </div>
    </header>
  `,
  styles: [`
    .header-container {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 8px rgba(44, 62, 80, 0.1);
      border-bottom: 1px solid rgba(44, 62, 80, 0.08);
    }

    .nav-wrapper {
      max-width: 1280px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Logo Styles */
    .logo-link {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .logo-link:hover {
      transform: translateY(-2px);
    }

    .logo-text {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .name-text {
      font-size: 1.35rem;
      font-weight: 500;
      color: #2c3e50;
      letter-spacing: 0.5px;
    }

    /* Navigation Links */
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      position: relative;
      text-decoration: none;
      color: #2c3e50;
      font-weight: 600;
      font-size: 1.05rem;
      letter-spacing: 0.5px;
      padding: 0.5rem 0;
      transition: color 0.3s ease;
      display: inline-block;
    }

    .nav-link.hidden {
      display: none;
    }

    .link-text {
      position: relative;
      z-index: 1;
    }

    .link-underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #2c3e50 0%, #34495e 100%);
      transition: width 0.3s ease;
    }

    .nav-link:hover .link-underline {
      width: 100%;
    }

    .nav-link:hover {
      color: #34495e;
    }

    .nav-link.active .link-underline {
      width: 100%;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      color: #2c3e50;
      transition: background-color 0.3s ease;
      border-radius: 8px;
    }

    .mobile-menu-btn:hover {
      background-color: rgba(44, 62, 80, 0.08);
    }

    /* Mobile Menu */
    .mobile-menu {
      display: none;
      flex-direction: column;
      gap: 0;
      background: #ffffff;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      border-top: 1px solid rgba(44, 62, 80, 0.08);
    }

    .mobile-menu.open {
      max-height: 300px;
      padding: 1rem 0;
    }

    .mobile-link {
      padding: 1rem 2rem;
      text-decoration: none;
      color: #2c3e50;
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 0.5px;
      transition: background-color 0.3s ease, padding-left 0.3s ease;
      border-left: 3px solid transparent;
    }

    .mobile-link.hidden {
      display: none;
    }

    .mobile-link:hover {
      background-color: rgba(44, 62, 80, 0.05);
      padding-left: 2.5rem;
      border-left-color: #34495e;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-wrapper {
        padding: 1rem 1.5rem;
      }

      .nav-links {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .mobile-menu {
        display: flex;
      }

      .logo-text {
        font-size: 1.5rem;
      }

      .name-text {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .nav-wrapper {
        padding: 0.75rem 1rem;
      }

      .logo-text {
        font-size: 1.3rem;
      }

      .name-text {
        font-size: 0.9rem;
      }
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  constructor(private router: Router) {}
  
  isActive(route: string): boolean {
    return this.router.url === route || this.router.url === '/' && route === '/about';
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
