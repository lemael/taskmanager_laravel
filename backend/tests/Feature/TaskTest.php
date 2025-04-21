<?php

namespace Tests\Feature;

use App\Models\Task;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TaskTest extends TestCase
{
    /**
     * A basic unit test example.
     */
    use RefreshDatabase; // remet la base à zéro avant chaque test

    public function test_can_create_task()
    {
        $task = Task::create([
            'title' => 'Test task',
            'description' => 'Créer une tâche en test',
            'is_completed' => false,
        ]);

        $this->assertDatabaseHas('tasks', [
            'title' => 'Test task'
        ]);
    }
}
