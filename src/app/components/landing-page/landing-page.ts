import { Component, HostListener } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Tech {
  name: string;
  color: string;
}

interface Plan {
  name: string;
  price: string;
  period?: string;
  popular?: boolean;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {
  scrolled = false;
  menuOpen = false;

  features: Feature[] = [
    {
      icon: 'bi bi-people-fill',
      title: 'Gestão de Passageiros',
      description: 'Controle completo de passageiros, rotas e check-ins diários com interface intuitiva'
    },
    {
      icon: 'bi bi-map-fill',
      title: 'Otimização de Rotas',
      description: 'Algoritmo inteligente para calcular as melhores rotas e economizar tempo e combustível'
    },
    {
      icon: 'bi bi-file-earmark-text-fill',
      title: 'Comprovantes Digitais',
      description: 'Sistema de upload e aprovação de comprovantes de pagamento totalmente digital'
    },
    {
      icon: 'bi bi-bar-chart-fill',
      title: 'Relatórios e Analytics',
      description: 'Dashboards completos com métricas de presença, pagamentos e performance'
    },
    {
      icon: 'bi bi-shield-fill-check',
      title: 'Segurança JWT',
      description: 'Autenticação robusta com tokens JWT e controle de acesso por perfis'
    },
    {
      icon: 'bi bi-phone-fill',
      title: 'Mobile First',
      description: 'Design responsivo otimizado para smartphones, tablets e desktops'
    }
  ];

  technologies: Tech[] = [
    { name: 'Angular 20', color: 'bg-red-600' },
    { name: 'Spring Boot 3', color: 'bg-green-600' },
    { name: 'MySQL 8', color: 'bg-blue-700' },
    { name: 'Docker', color: 'bg-blue-500' },
    { name: 'MinIO', color: 'bg-red-500' },
    { name: 'Google Maps', color: 'bg-yellow-500' }
  ];

  plans: Plan[] = [
    {
      name: 'Starter',
      price: 'Gratuito',
      description: 'Para motoristas iniciantes',
      features: [
        'Até 10 passageiros',
        'Check-in básico',
        '1 rota otimizada',
        'Suporte por email'
      ]
    },
    {
      name: 'Professional',
      price: 'R$ 49,90',
      period: '/mês',
      popular: true,
      description: 'Ideal para profissionais',
      features: [
        'Passageiros ilimitados',
        'Check-in avançado',
        'Rotas ilimitadas',
        'Relatórios completos',
        'Suporte prioritário',
        'API de integração'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Sob Consulta',
      description: 'Para frotas e empresas',
      features: [
        'Tudo do Professional',
        'Multi-motoristas',
        'Personalização avançada',
        'SLA garantido',
        'Suporte dedicado',
        'Treinamento incluso'
      ]
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
