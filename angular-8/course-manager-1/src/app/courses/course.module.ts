import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shered/component/start/star.module";
import { AppPipeModule } from "../shered/pipe/app.pipe.module";
import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./course.info.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent

    ], imports: [
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule {

}