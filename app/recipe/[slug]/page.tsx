import React from 'react'
import RecipeClient from './RecipeClient'

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

async function RecipePage({ params, searchParams }: PageProps) {
  return <RecipeClient slug={params.slug} />;
}

export default RecipePage; 