<nav class="fixed top-0 left-0 w-64 bg-black h-full bg-gray-900 text-white shadow-lg z-50">
    <div class="p-6 text-xl font-bold border-b border-gray-700">
        Administrator-Dashboard
    </div>
    <ul class="mt-4 space-y-1 px-4">
        <li>
            <a href="{{ route('dashboard') }}" class="block py-2 px-3 rounded hover:bg-gray-800">
                🏠 Dashboard
            </a>
        </li>
        <li>
            <a href="{{ route('users') }}" class="block py-2 px-3 rounded hover:bg-gray-800">
                👥 Benutzer
            </a>
        </li>
        <li>
            <a href="{{ route('tasks') }}" class="block py-2 px-3 rounded hover:bg-gray-800">
                ✅ Tasks
            </a>
        </li>
    </ul>
</nav>
