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
    },
    {
        path: 'verb-infinitive',
        loadComponent: () =>
            import('./features/verb-infinitive/verb-infinitive.component').then(m => m.VerbInfinitiveComponent)
    },
    {
        path: 'how-often',
        loadComponent: () =>
            import('./features/how-often/how-often.component').then(m => m.HowOftenComponent)
    },
    {
        path: 'like-would-like',
        loadComponent: () =>
            import('./features/like-would-like/like-would-like.component').then(m => m.LikeWouldLikeComponent)
    },
    {
        path: 'imperatives',
        loadComponent: () =>
            import('./features/imperative/imperative.component').then(m => m.ImperativeComponent)
    },
    {
        path: 'when-clauses',
        loadComponent: () =>
            import('./features/when-clauses/when-clauses.component').then(m => m.WhenClausesComponent)
    },
    {
        path: 'can-could',
        loadComponent: () =>
            import('./features/can-could/can-could.component').then(m => m.CanCouldComponent)
    }
];
