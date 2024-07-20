import { App } from '@/app/main'
import { Route } from '@/app/routes'
import type { Context } from 'elysia'
import { renderToReadableStream } from 'react-dom/server'

export async function handleRequest({}: Context) {
  const stream = await renderToReadableStream(
    <App>
      <Route />
    </App>,
    {
      bootstrapModules: ['/_dist/client.js']
    }
  )
  await stream.allReady
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
