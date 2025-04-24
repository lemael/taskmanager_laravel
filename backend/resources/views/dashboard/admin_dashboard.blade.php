{{-- resources/views/dashboard/admin_dashboard.blade.php --}}
@extends('layouts.app') {{-- ou 'layouts.admin' si tu crées un layout séparé --}}

@section('title', 'Dashboard Admin')

@section('content')
    <div class="py-8">
        <h1 class="text-2xl font-bold mb-4">Tableau de bord Administrateur</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-6 rounded shadow">
                <h2 class="text-lg font-semibold mb-2">Pages</h2>
                <p>Gérez le contenu des pages du site.</p>
                <a href="{{ route('admin.pages') }}" class="text-blue-600 hover:underline">Voir les pages</a>
            </div>

            <div class="bg-white p-6 rounded shadow">
                <h2 class="text-lg font-semibold mb-2">Utilisateurs</h2>
                <p>Gérez les utilisateurs.</p>
                <a href="{{ route('admin.users') }}" class="text-blue-600 hover:underline">Voir les utilisateurs</a>
            </div>

            <div class="bg-white p-6 rounded shadow">
                <h2 class="text-lg font-semibold mb-2">Statistiques</h2>
                <p>Statistiques d’utilisation (à venir).</p>
                <span class="text-gray-500 italic">À venir...</span>
            </div>
        </div>
    </div>
@endsection
