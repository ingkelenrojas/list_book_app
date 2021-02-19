<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Book::orderBy('created_at', 'DESC')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newBook = new Book;
        $newBook->book_title = $request->book['book_title'];
        $newBook->book_isbn = $request->book['book_isbn'];
        $newBook->book_cover_img = $request->book['book_cover_img'];
        $newBook->book_author = $request->book['book_author'];
        $newBook->book_by_statement = $request->book['book_by_statement'];
        $newBook->book_publish_date = $request->book['book_publish_date'];
        $newBook->save();

        return $newBook;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $existingBook = Book::find( $id );

        if ( $existingBook ) {
            return $existingBook;
        }

        return 'Book not found';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingBook = Book::find( $id );

        if ( $existingBook ) {
            $existingBook->delete();
            return 'Book successfully deleted';
        }

        return 'Book not found';
    }
}
