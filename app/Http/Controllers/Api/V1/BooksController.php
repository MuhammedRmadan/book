<?php

namespace App\Http\Controllers\Api\V1;

use App\Company;
use App\Model\Book;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BooksController extends Controller
{
    public function index()
    {
        logger(__FUNCTION__);
        return Book::all();
    }

    public function show($id)
    {
        return Book::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);
        $book->update($request->all());

        return $book;
    }

    public function store(Request $request)
    {
        logger(__FUNCTION__);
        logger($request->all());
        $book = Book::create($request->all());
        return $book;
    }

    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return '';
    }
}
