import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  standalone: false,
  
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {
  sections = [
    { 
      id: 'ai', 
      name: 'AI', 
      imageUrl: 'https://www.vishvena.com/assets/images/concept/con1.webp',
      title: 'Artificial Intelligence',
      description: `At Vishvena, we are at the forefront of innovation, utilizing Artificial Intelligence to transform key sectors, including Agriculture, Fleet Management, Health, and Defence. 
      Our commitment lies in delivering cutting-edge solutions that optimize operations,`
    },
    { 
      id: 'iot', 
      name: 'IoT', 
      imageUrl: 'https://www.vishvena.com/assets/images/concept/con2.webp',
      title: 'Internet of Things (IoT)',
      description: `Specializes in shaping deep tech innovation. Leverages IoT for solutions in healthcare, agriculture, and fleet management. 
      Holds patents for inventions like TRINETRA IoT software.`
    },
    { 
      id: 'drones', 
      name: 'Drones', 
      imageUrl: 'https://www.vishvena.com/assets/images/concept/con3.webp',
      title: 'Drones',
      description: `Vishvena's Drone Division: Pushing Boundaries in Aerial Tech. Our expertise in IoT, AI, and advanced hardware drives innovation for agriculture, logistics, and emergency response. Reliable, simple, and safe.`
    },
    { 
      id: 'software', 
      name: 'Software', 
      imageUrl: 'https://www.vishvena.com/assets/images/concept/con4.webp',
      title: 'Software Development',
      description: `Vishvena places a strong emphasis on software solutions that drive efficiency, precision, and advancement across key sectors. Explore how Vishvena reshapes Agriculture, Fleet Management, Health, and Defence.`
    },
    { 
      id: 'ip', 
      name: 'Intellectual Property', 
      imageUrl: 'https://www.vishvena.com/assets/images/concept/con5.webp',
      title: 'Intellectual Property',
      description: `Vishvena specializes in Intellectual Property services, safeguarding businesses' innovations worldwide. Tailored solutions cover patents, trademarks, and copyrights, empowering clients to maximize the value of their assets.`
    }
  ];

  // Active section to display
  activeSection: string = 'ai';

  // Update the active section when clicking a button
  showContent(sectionId: string): void {
    this.activeSection = sectionId;
  }

  // Fetch the currently active section details
  getActiveSection() {
    return this.sections.find(section => section.id === this.activeSection);
  }
}
