import { Component, OnInit, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { LoginComponent } from '../login/login.component';
import { SidebarModule } from 'primeng/sidebar';
@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MenubarModule,LoginComponent,SidebarModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit{
  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  
    ngOnInit() {
        this.items = [
            {
                label: 'All Donation',
                icon: 'pi pi-home'
            },
            {
                label: 'Likes',
                icon: 'pi pi-heart-fill'
            },
            {
                label: 'Your profile',
                icon: 'pi pi-user',
                items: [
                  {
                    label: 'Edit Your Profile',
                    icon: 'pi pi-user-edit'
                  },
                  {
                    label: 'My Donations',
                    icon: 'pi pi-arrow-right'
                  },
                  {
                    label: 'Log Out',
                    icon: 'pi pi-sign-out'
                  }
                ]
               
            },
            {
              label: 'Sign In',
              icon: 'pi pi-sign-in',
              command: () => this.sidebarVisible = !this.sidebarVisible
            },

            {
             label: 'Sign Up',
             icon: 'pi pi-sign-out'
             },
        ]
      }
}
