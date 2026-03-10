import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'verb-to-be',
        pathMatch: 'full',
    },
    {
        path: 'verb-to-be',
        loadComponent: () => 
            import('./features/ver-to-be/ver-to-be.component').then(m => m.VerToBeComponent)
    },
    {
        path: 'simple-past-regular-verbs',
        loadComponent: () =>
            import('./features/past-regular-verbs/past-regular-verbs.component').then(m => m.PastRegularVerbsComponent)
    },
    {
        path: 'simple-past-irregular-verbs',
        loadComponent: () =>
            import('./features/past-tenses/past-tenses.component').then(m => m.PastTensesComponent)
    },
    {
        path: 'prepositions',
        loadComponent: () =>
            import('./features/prepositions/prepositions.component').then(m => m.PrepotitionsComponent)
    },
    {
        path: 'nouns',
        loadComponent: () =>
            import('./features/nouns/nouns.component').then(m => m.NounsComponent)
    },
    {
        path: 'vocabulary',
        loadComponent: () =>
            import('./features/vocabulary/vocabulary.component').then(m => m.VocabularyComponent)
    }
];
