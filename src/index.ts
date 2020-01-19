#!/usr/bin/env node

import { auth, request, Request } from 'league-connect'

const [method, url, body] = process.argv.slice(2)

async function main(method: string, url: string, body: string) {
  if (!method || !url) {
    console.error('No URL specified.')

    return
  }

  if (!['POST', 'GET', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    return
  }

  const credentials = await auth()
  const options: Request = {
    method: method as Request['method'],
    url
  }

  if (body) {
    options.body = JSON.parse(body !== '' ? body : '{}')
  }

  try {
    const res = await request(options, credentials)
    console.log(await res.json())
  } catch (err) {
    console.error(err.message)
  }

}

main(method, url, body)