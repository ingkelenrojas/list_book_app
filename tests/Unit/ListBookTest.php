<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;
use App\Models\Book;


class ListBookTest extends TestCase
{
    public function testGetAllBooks() {
        
        $response = $this->get('/api/books');
        
        $response->assertStatus(200);
    }

    public function testGetFirstBook() {
        $newBook = new Book;
        $newBook->book_title = 'title';
        $newBook->book_isbn = '1234567890';
        $newBook->book_cover_img = 'jpeg';
        $newBook->book_author = 'john';
        $newBook->book_by_statement = 'New statement';
        $newBook->book_publish_date = '2021';
        $newBook->save();
    
        $response = $this->get("/api/book/{$newBook->id}");
        $response->assertStatus(200);
    }

    public function testBookCreation() 
    {
        $book = [ 
            'book' => [
                'book_isbn'          => '1234567890',
                'book_title'         => 'Book title',
                'book_cover_img'     => 'Book img jpeg',
                'book_author'        => 'Book author John',
                'book_by_statement'  => 'Book by statement',
                'book_publish_date'  => '2021',
            ]
        ];

        $response = $this->json('POST', '/api/book/store', $book);

        $response->assertStatus(201);
    }

    public function testDeleteBookResource() {
        $book = Book::create([
            'book_isbn'          => '1234567890',
            'book_title'         => 'Book title',
            'book_cover_img'     => 'Book img jpeg',
            'book_author'        => 'Book author John',
            'book_by_statement'  => 'Book by statement',
            'book_publish_date'  => '2021',
        ]);

        $response = $this->json('DELETE', "/api/book/{$book->id}");
        
        $response->assertStatus(200);
    }
}
