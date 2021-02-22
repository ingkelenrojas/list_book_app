<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'book_isbn',
        'book_title',
        'book_cover_img',
        'book_author',
        'book_by_statement',
        'book_publish_date',
    ];
}
