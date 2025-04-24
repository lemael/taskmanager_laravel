<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginPageTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function login_page_is_accessible()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
        $response->assertSee('Login'); // Optionnel : vérifier que le mot "Login" est affiché
    }

    /** @test */
    public function login_fails_with_invalid_credentials()
    {
        $response = $this->post('/login', [
            'email' => 'invalid@example.com',
            'password' => 'wrong-password',
        ]);

        $response->assertSessionHasErrors(); // Laravel doit refuser l'accès
    }
}
