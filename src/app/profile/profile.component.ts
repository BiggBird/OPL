import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contributor, Lesson } from '../category';
import { SidebarlinkService } from '../sidebarlink.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user_id: string;
    profile: Contributor;
    lessons: Lesson[];
    private observable_profile: any = null;
    private observable_param: any = null;
    private observable_lessons: any = null;

  constructor(private sidebarlinkService: SidebarlinkService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.observable_param = this.route.queryParams.subscribe(params => {
          this.user_id = params['user_id'];
      });
      this.user_id = this.route.snapshot.paramMap.get('id');
      this.getProfile(this.user_id);
      this.getLessons(this.user_id);
  }

  getProfile(user_id: string): void {
    this.observable_profile = this.sidebarlinkService.getProfile(user_id)
             .subscribe(profile => this.profile = profile);
  }
  getLessons(user_id: string): void {
     this.observable_lessons = this.sidebarlinkService.getLessonsByUser(user_id)
               .subscribe(lessons => this.lessons = lessons);
   }

  ngOnDestroy() {
    if (this.observable_profile != null)
       this.observable_profile.unsubscribe();
    if (this.observable_param != null)
       this.observable_param.unsubscribe();
    if (this.observable_lessons != null)
       this.observable_lessons.unsubscribe();

  }

}
