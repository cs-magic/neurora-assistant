"use client"

import { useSession } from "next-auth/react"

export default function Page() {
  const session = useSession()

  console.log({ session })

  return "hello"
}
