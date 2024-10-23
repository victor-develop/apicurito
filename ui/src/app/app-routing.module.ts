import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmptyStateComponent } from "./empty/empty-state.component";
import { EditorComponent } from "./editor/editor.component";
import { EditorGuard } from "./editor/editor.guard";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

const routes: Routes = [
  { path: "", component: EmptyStateComponent },
  { path: "editor", component: EditorComponent, canActivate: [EditorGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class AppRoutingModule {}
