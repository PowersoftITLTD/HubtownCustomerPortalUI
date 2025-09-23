import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  activeSection: string = 'book-details'; // Default active section
  stickyNavHeight: number = 70; // Adjust this based on your nav height
  
  // Scroll to the section smoothly and adjust for sticky nav
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - this.stickyNavHeight, 
        behavior: 'smooth'
      });
    }
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
      root: null, // Viewport
      rootMargin: `-${this.stickyNavHeight}px 0px -80% 0px`, // Negative root margin for triggering near the sticky nav
      threshold: 0 // Trigger when top of the section is near sticky nav
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Check if the section is intersecting the viewport
        // console.log(entry);
        
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveNavOnScroll();
  }

  // Check which section is near the sticky nav on scroll
  private updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';

    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= this.stickyNavHeight && rect.bottom >= this.stickyNavHeight) {
        currentSection = section.id;
      }
    });

    if (currentSection) {
      this.activeSection = currentSection;
    }
  }
}
