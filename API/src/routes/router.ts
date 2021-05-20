import express from 'express'
import productsRouter from './productsRouter'
import ordersRouter from './ordersRouter'
import authRouter from './authRouter'
import clientsRouter from './clientsRouter'
import adminRouter from './adminRouter'
const router = express()

router.use('/products',productsRouter);

router.use('/auth',authRouter);

router.use('/orders',ordersRouter);

router.use('/clients',clientsRouter)

router.use('/admins',adminRouter)

export default router