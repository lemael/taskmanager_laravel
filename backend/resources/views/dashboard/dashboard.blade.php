@extends('components/layouts.app')

@section('title', 'Admin-Dashboard')

@section('content')
    <h1 class="text-3xl font-bold mb-8">Administrator-Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {{-- Benutzerkarte --}}
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 class="text-xl font-semibold mb-2">Benutzer</h2>
            <p class="text-gray-600">Verwalten Sie die Benutzer des Systems.</p>
            <a href="{{ route('users') }}" class="text-blue-600 font-medium hover:underline mt-2 inline-block">
                Benutzer anzeigen →
            </a>
        </div>

        {{-- Aufgabenkarte --}}
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 class="text-xl font-semibold mb-2">Aufgaben</h2>
            <p class="text-gray-600">Verwalten Sie die Aufgaben der passenden Benutzer.</p>
            <a href="{{ route('tasks') }}" class="text-blue-600 font-medium hover:underline mt-2 inline-block">
                Aufgaben anzeigen →
            </a>
        </div>

        {{-- Weitere Karten können hier hinzugefügt werden --}}
    </div>
@endsection
