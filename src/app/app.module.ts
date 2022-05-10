import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { RecipesComponent } from './templates/recipes/recipes.component';
import { BookmarksComponent } from './templates/bookmarks/bookmarks.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeComponent } from './templates/recipe/recipe.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipesSortComponent } from './components/recipes-sort/recipes-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecipesComponent,
    BookmarksComponent,
    RecipesListComponent,
    RecipeComponent,
    FooterComponent,
    RecipesSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
