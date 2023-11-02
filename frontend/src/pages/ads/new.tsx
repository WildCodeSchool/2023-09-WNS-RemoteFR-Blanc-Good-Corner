import { Category } from '@/types/category.type';
import { gql, useMutation, useQuery } from '@apollo/client';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react'

const GET_ALL_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

const CREATE_AD = gql`
  mutation Mutation($ad: CreateAdInputType!) {
    createAd(ad: $ad) {
      location
      description
      owner
      picture
      price
      title
      id
    }
  }
`;

function NewAd() {
  const router = useRouter();
  const { data } = useQuery(GET_ALL_CATEGORIES);
  const [createAd] = useMutation(CREATE_AD);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const form: EventTarget = event.target;
    const formData = new FormData(form as HTMLFormElement);

    const formDataJson = Object.fromEntries(formData.entries());
    console.log(formDataJson);

    createAd({
      variables: {
        ad: {
          title: formDataJson.title,
          price: parseInt(formDataJson.price as string),
          picture: formDataJson.picture,
          description: formDataJson.description,
          owner: formDataJson.owner,
          location: formDataJson.location,
          categoryId: parseInt(formDataJson.categoryId as string)
        }
      },
      onCompleted: () => {
        router.push('/');
      }
    })
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
          {data?.categories.map((category: Category) => (
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