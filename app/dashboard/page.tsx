import React from 'react'
import { auth } from '@clerk/nextjs/server'
import { getUserLinks } from '../../lib/server/links'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    return (
      <main>
        <h1>Dashboard</h1>
        <p>Please sign in to view your links.</p>
      </main>
    )
  }

  const links = await getUserLinks(userId)

  return (
    <main>
      <h1>Dashboard</h1>
      {links.length === 0 ? (
        <p>No links yet. Create your first short link.</p>
      ) : (
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.id} className="flex items-center justify-between">
              <div>
                <a href={l.original_url} className="text-primary underline" target="_blank" rel="noreferrer">
                  {l.title ?? l.short_id ?? l.original_url}
                </a>
                <div className="text-sm text-muted-foreground">{l.original_url}</div>
              </div>
              <div className="text-sm text-gray-500">/{l.short_id}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}