import dashboardlogo from './assets/dashboard_logo.png';
import appointmentlogo from './assets/appointement_logo.png';
import doctorslogo from './assets/doctor_logo.png';
import patientslogo from './assets/patients_logo.png';
import chatslogo from './assets/chats_logo.png';
import fiiLogo from './assets/fii_logo.png';

export interface SideNavbarLinkInterface {
  img: string;
  name: string;
}

export const SideNavbarLinks: SideNavbarLinkInterface[] = [
  {
    img: dashboardlogo,
    name: 'dashboard',
  },
  {
    img: appointmentlogo,
    name: 'appointment',
  },
  {
    img: fiiLogo,
    name: 'game',
  },
  {
    img: doctorslogo,
    name: 'doctors',
  },
  {
    img: patientslogo,
    name: 'patients',
  },
  {
    img: chatslogo,
    name: 'chats',
  },
];
