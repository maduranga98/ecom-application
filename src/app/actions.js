'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' })
})

export async function saveContactMessage(prevState, formData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Simulate saving to a database
  console.log('Saving contact message:', validatedFields.data)

  return { message: 'Your message has been sent successfully!' }
}
