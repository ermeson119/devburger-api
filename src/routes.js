import { Router } from 'express'
import { v4 } from 'uuid'

import User from './App/models/User'


const routes = new Router()

routes.get('/', async (request, response) =>{
    const user = await User.create({
        id: v4(),
        name: "Anna",
        email: "Anna@gmail.com",
        password_hash: '1154865',
    })
    return response.status(201).json(user)
})

export default routes