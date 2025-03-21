import React from 'react'
import RecipeClient from './RecipeClient'

export default function RecipePage({ params }: { params: { slug: string } }) {
  return <RecipeClient slug={params.slug} />;
} 