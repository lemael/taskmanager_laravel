<!-- resources/views/components/sidebar.blade.php -->
<div class="w-64 top-0 left-0 z-50 text-black p-6 space-y-4">
    <h2 class="text-xl font-bold">Administrator-Dashboard</h2>

    <nav class="space-y-2 mt-6">
        <a href="{{ route('dashboard') }}" class="block py-2 px-3 hover:bg-gray-800 rounded">Dashboard</a>
        <a href="{{ route('users') }}" class="block py-2 px-3 hover:bg-gray-800 rounded">Benutzer</a>
        <a href="{{ route('tasks') }}" class="block py-2 px-3 hover:bg-gray-800 rounded">Aufgaben</a>
    </nav>
</div>