<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        $password = 'admin123';
        // create demo users
        $role= Role::where('name', 'client')->first(); 

        for ($i=0; $i <= 50 ; $i++) { 

            $user = \App\Models\User::factory()->create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'status' => 'Active',
                'password' => $password
            ]);
            $user->assignRole($role);
        }
    }
}
