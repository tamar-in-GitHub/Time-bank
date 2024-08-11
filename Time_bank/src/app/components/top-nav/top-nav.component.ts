import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MenubarModule,],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit{
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
            },

            {
             label: 'Sign Up',
             icon: 'pi pi-sign-out'
             },
              
            
          
        ]
      }
}
