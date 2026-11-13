<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function show(Todo $todo): Todo
    {
        return $todo;
    }

    public function index()
    {
        return Todo::latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => "required|string|min:3|max:255",
        ]);
        return response()->json(Todo::create($data), 201);
    }

    public function update(Request $request, Todo $todo)
    {
        $data = $request->validate([
            "title" => "sometimes|string|min:3|max:255",
            "completed" => "sometimes|boolean",
        ]);
        $todo->update($data);
        return $todo;
    }

    public function destroy(Todo $todo)
    {
        $todo->delete();
        return response()->noContent();
    }
}
