import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {

  const { id } = useParams()
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData()

  const BookCategories = [
    "Fiction",
    "Non-Fiction",
    "Family",
    "Novels",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ]

  const [selectedBookCategory, setselectedBookCategory] = useState(BookCategories[0]);
  //handle options
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleBookUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    // console.log(bookObj)

    //update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }
    ).then(res => res.json()).then(data => {
      alert("Book updated successfully!")
    })
    
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleBookUpdate} className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>

        {/*first row*/}
        {/*book title*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book name"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>
          {/*author name*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/*second row*/}
        {/*book image*/}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>
          {/*category*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block" >
              <Label
                htmlFor="inputState"
                value="Book Category" />
            </div>
            <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {
                BookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </select>
          </div>
        </div>

        {/*book description*/}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="book description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            rows={6}
            className='w-full'
            defaultValue={bookDescription} />

        </div>

        {/*book pdf link*/}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name='bookPDFURL'
            type="text"
            placeholder="book pdf url"
            required
            defaultValue={bookPDFURL} />
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form >
    </div >
  )
}

export default EditBooks