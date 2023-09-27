import { Category } from '@/types/category.type';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react'

function NewAd() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get<Category[]>('http://localhost:3001/categories');
      setCategories(response.data);
    }
    fetchCategories();
  }, []);


  const submit = (event: FormEvent) => {
    event.preventDefault();
    const form: EventTarget = event.target;
    const formData = new FormData(form as HTMLFormElement);

    const formDataJson = Object.fromEntries(formData.entries());
    console.log(formDataJson);
    axios.post('http://localhost:3001/ads', formDataJson)
      .then(() => router.push('/ads'));
  }

  return (
    <form onSubmit={submit}>
      <label>
        Titre de l&apos;annonce
        <input type="text" className="text-field" name="title" />
      </label><br/>
      <label>
        Prix
        <input type="number" className="text-field" name="price" />
      </label><br/>
      <label>
        Picture
        <input type="text" className="text-field" name="picture" />
      </label><br/>
      <label>
        Catégorie
        <select name="categoryId">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label><br/>
      <label>
        Description
        <textarea className="text-field" name="description" />
      </label><br/>
      <label>
        Owner
        <input type="text" className="text-field" name="owner" />
      </label><br/>
      <label>
        Location
        <input type="text" className="text-field" name="location" />
      </label><br/>
      <button className="button">Créer</button>
    </form>
  )
}

export default NewAd;